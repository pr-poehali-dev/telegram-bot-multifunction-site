import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigate('/profile');
    }
  };

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
