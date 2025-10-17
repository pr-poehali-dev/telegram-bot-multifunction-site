import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'login' | 'complete'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setStep('complete');
    }
  };

  const handleComplete = () => {
    if (nickname && birthdate && agreedToTerms) {
      navigate('/profile');
    }
  };

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="neomorph rounded-3xl border-0 bg-card p-8 max-w-md w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="neomorph w-24 h-24 rounded-full flex items-center justify-center bg-primary/10">
              <Icon name="UserPlus" size={48} className="text-primary" />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Завершите регистрацию</h2>
              <p className="text-muted-foreground text-sm">Заполните информацию о вашем профиле</p>
            </div>

            <div className="w-full space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Никнейм</label>
                <Input 
                  placeholder="Введите никнейм"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  className="neomorph-inset rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Дата рождения</label>
                <Input 
                  type="date"
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="neomorph-inset rounded-xl"
                />
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox 
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  className="mt-1"
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Я принимаю условия использования сервиса и даю согласие на обработку персональных данных
                </label>
              </div>
            </div>

            <Button 
              size="lg"
              className="neomorph-hover rounded-2xl px-8 py-6 bg-primary mt-4 w-full disabled:opacity-50"
              onClick={handleComplete}
              disabled={!nickname || !birthdate || !agreedToTerms}
            >
              <Icon name="Check" size={20} className="mr-2" />
              Завершить регистрацию
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="neomorph rounded-3xl border-0 bg-card p-8 max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="neomorph w-24 h-24 rounded-full flex items-center justify-center bg-primary/10">
            <Icon name="LogIn" size={48} className="text-primary" />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Вход в аккаунт</h2>
            <p className="text-muted-foreground text-sm">Введите ваши данные для входа</p>
          </div>

          <div className="w-full space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Электронная почта</label>
              <Input 
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="neomorph-inset rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Пароль</label>
              <Input 
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="neomorph-inset rounded-xl"
              />
            </div>
          </div>

          <Button 
            size="lg"
            className="neomorph-hover rounded-2xl px-8 py-6 bg-primary mt-4 w-full disabled:opacity-50"
            onClick={handleLogin}
            disabled={!email || !password}
          >
            <Icon name="LogIn" size={20} className="mr-2" />
            Войти
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Нет аккаунта?{' '}
            <Link to="/register" className="text-primary font-semibold hover:underline">
              Зарегистрироваться
            </Link>
          </div>

          <Link to="/" className="w-full">
            <Button 
              variant="ghost"
              size="sm"
              className="w-full"
            >
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
