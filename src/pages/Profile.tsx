import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(true);
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = () => {
    if (nickname && birthdate && agreedToTerms) {
      setIsNewUser(false);
    }
  };

  if (isNewUser) {
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
              onClick={handleSubmit}
              disabled={!nickname || !birthdate || !agreedToTerms}
            >
              <Icon name="Check" size={20} className="mr-2" />
              Сохранить
            </Button>

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
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="lg">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Профиль</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="neomorph rounded-3xl border-0 bg-card p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="neomorph w-32 h-32 rounded-full flex items-center justify-center bg-primary/10">
                <Icon name="User" size={64} className="text-primary" />
              </div>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{nickname}</h2>
                <p className="text-muted-foreground">user@example.com</p>
              </div>

              <div className="w-full space-y-4 mt-6">
                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Дата рождения</p>
                  <p className="text-lg font-semibold">{new Date(birthdate).toLocaleDateString('ru-RU')}</p>
                </div>

                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Тариф</p>
                  <p className="text-lg font-semibold">Базовый</p>
                </div>

                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Изображений создано</p>
                  <p className="text-lg font-semibold">0</p>
                </div>
              </div>

              <Button 
                size="lg"
                className="neomorph-hover rounded-2xl px-8 py-6 bg-primary mt-4 w-full"
              >
                <Icon name="Settings" size={20} className="mr-2" />
                Настройки
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Profile;
