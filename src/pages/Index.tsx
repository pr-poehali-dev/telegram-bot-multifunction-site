import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const imageSlots = Array(6).fill(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="neomorph-inset bg-gradient-to-r from-primary/30 to-accent/30 py-3 px-4 text-center sticky top-0 z-50 backdrop-blur-lg">
        <p className="text-sm font-semibold flex items-center justify-center gap-2 flex-wrap">
          <Icon name="Sparkles" size={16} className="text-primary-foreground" />
          <span className="text-primary-foreground">Специальная акция: первый месяц со скидкой 50%!</span>
          <Link to="/pricing">
            <Button size="sm" variant="secondary" className="ml-2 rounded-full">
              Подробнее
              <Icon name="ArrowRight" size={14} className="ml-1" />
            </Button>
          </Link>
        </p>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageSlots.map((_, index) => (
              <Card 
                key={index}
                className="neomorph-hover rounded-3xl border-0 bg-card overflow-hidden group cursor-pointer transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon name="Image" size={64} className="text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="neomorph w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/10">
            <Icon name="Bot" size={32} className="text-primary" />
          </div>
          <p className="text-muted-foreground mb-4">
            © 2024 AI Telegram Bot. Все права защищены.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button variant="ghost" size="sm">О нас</Button>
            <Link to="/pricing">
              <Button variant="ghost" size="sm">Тарифы</Button>
            </Link>
            <Button variant="ghost" size="sm">Документация</Button>
            <Button variant="ghost" size="sm">Поддержка</Button>
            <Button variant="ghost" size="sm">Контакты</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
