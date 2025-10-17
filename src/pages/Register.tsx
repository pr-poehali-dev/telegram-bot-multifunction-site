import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      setError('Заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="neomorph rounded-3xl border-0 bg-card p-8 max-w-md w-full">
        <div className="flex flex-col items-center gap-6">
          <div className="neomorph w-24 h-24 rounded-full flex items-center justify-center bg-primary/10">
            <Icon name="UserPlus" size={48} className="text-primary" />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Регистрация</h2>
            <p className="text-muted-foreground text-sm">Создайте новый аккаунт</p>
          </div>

          <div className="w-full space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Электронная почта</label>
              <Input 
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="neomorph-inset rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Придумайте пароль</label>
              <Input 
                type="password"
                placeholder="Минимум 6 символов"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="neomorph-inset rounded-xl"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Подтвердите пароль</label>
              <Input 
                type="password"
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError('');
                }}
                className="neomorph-inset rounded-xl"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-3 rounded-xl">
                <Icon name="AlertCircle" size={16} />
                <span>{error}</span>
              </div>
            )}
          </div>

          <Button 
            size="lg"
            className="neomorph-hover rounded-2xl px-8 py-6 bg-primary mt-4 w-full disabled:opacity-50"
            onClick={handleRegister}
            disabled={!email || !password || !confirmPassword}
          >
            <Icon name="UserPlus" size={20} className="mr-2" />
            Зарегистрироваться
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Войти
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

export default Register;