import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Profile = () => {
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
                <h2 className="text-2xl font-bold mb-2">Имя пользователя</h2>
                <p className="text-muted-foreground">user@example.com</p>
              </div>

              <div className="w-full space-y-4 mt-6">
                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Тариф</p>
                  <p className="text-lg font-semibold">Базовый</p>
                </div>

                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Изображений создано</p>
                  <p className="text-lg font-semibold">0</p>
                </div>

                <div className="neomorph-inset rounded-2xl p-4 bg-background/50">
                  <p className="text-sm text-muted-foreground mb-1">Дата регистрации</p>
                  <p className="text-lg font-semibold">01.01.2024</p>
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
