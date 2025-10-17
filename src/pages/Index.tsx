import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<'realistic' | 'anime' | 'all'>('all');
  
  const imageSlots = [
    { id: 0, type: 'realistic' },
    { id: 1, type: 'anime' },
    { id: 2, type: 'realistic' },
    { id: 3, type: 'anime' },
    { id: 4, type: 'realistic' },
    { id: 5, type: 'anime' }
  ];

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handleStyleClick = (style: 'realistic' | 'anime' | 'all') => {
    setSelectedStyle(style);
  };

  const filteredSlots = selectedStyle === 'all' 
    ? imageSlots 
    : imageSlots.filter(slot => slot.type === selectedStyle);

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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground font-medium"></span>
            
            <div className="flex gap-3">
              <Button
                size="sm"
                className={`neomorph-hover rounded-full px-5 py-2 transition-all duration-300 ${
                  selectedStyle === 'realistic' ? 'ring-2 ring-primary scale-105 bg-primary text-primary-foreground' : 'bg-card'
                }`}
                variant={selectedStyle === 'realistic' ? 'default' : 'outline'}
                onClick={() => handleStyleClick('realistic')}
              >
                <Icon name="User" size={16} className="mr-1" />
                <span className="text-sm font-medium">Реальный</span>
              </Button>

              <Button
                size="sm"
                className={`neomorph-hover rounded-full px-5 py-2 transition-all duration-300 ${
                  selectedStyle === 'anime' ? 'ring-2 ring-primary scale-105 bg-primary text-primary-foreground' : 'bg-card'
                }`}
                variant={selectedStyle === 'anime' ? 'default' : 'outline'}
                onClick={() => handleStyleClick('anime')}
              >
                <Icon name="Sparkles" size={16} className="mr-1" />
                <span className="text-sm font-medium">Аниме</span>
              </Button>

              {selectedStyle !== 'all' && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-full px-3 py-2"
                  onClick={() => handleStyleClick('all')}
                >
                  <Icon name="X" size={16} />
                </Button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {filteredSlots.map((slot, index) => (
              <Card 
                key={slot.id}
                className={`neomorph-hover rounded-3xl border-0 bg-card overflow-hidden group cursor-pointer transition-all duration-500 animate-fade-in ${
                  clickedIndex === slot.id ? 'ring-4 ring-primary scale-105' : ''
                }`}
                onClick={() => handleClick(slot.id)}
                onMouseEnter={() => setHoveredIndex(slot.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/15 transition-opacity duration-300 ${
                    hoveredIndex === slot.id || clickedIndex === slot.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <Icon 
                      name={clickedIndex === slot.id ? "CheckCircle" : "Image"} 
                      size={64} 
                      className={`transition-all duration-300 ${
                        clickedIndex === slot.id 
                          ? 'text-primary scale-110' 
                          : hoveredIndex === slot.id 
                          ? 'text-primary/60 scale-110' 
                          : 'text-muted-foreground/30'
                      }`} 
                    />
                    
                    {hoveredIndex === slot.id && clickedIndex !== slot.id && (
                      <div className="animate-fade-in">
                        <Button size="sm" className="rounded-full bg-primary text-primary-foreground">
                          <Icon name="Plus" size={16} className="mr-1" />
                          Добавить
                        </Button>
                      </div>
                    )}
                    
                    {clickedIndex === slot.id && (
                      <div className="animate-fade-in text-center">
                        <p className="text-primary font-semibold">Выбрано</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute top-3 right-3 neomorph rounded-full w-10 h-10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <span className="text-sm font-bold text-foreground">{slot.id + 1}</span>
                  </div>

                  <div className="absolute top-3 left-3 neomorph rounded-full px-3 py-1 flex items-center gap-1 bg-background/50 backdrop-blur-sm">
                    <Icon name={slot.type === 'realistic' ? 'User' : 'Sparkles'} size={14} />
                    <span className="text-xs font-semibold">{slot.type === 'realistic' ? 'Реальный' : 'Аниме'}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-6 justify-center mt-16">
            <Link to="/gallery">
              <Button 
                size="icon"
                className="neomorph-hover w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/90 to-primary transition-all duration-300 hover:scale-110"
              >
                <Icon name="ShoppingCart" size={36} />
              </Button>
            </Link>

            <Link to="/profile">
              <Button 
                size="icon"
                className="neomorph-hover w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/90 to-accent transition-all duration-300 hover:scale-110"
              >
                <Icon name="User" size={36} />
              </Button>
            </Link>

            <Link to="/pricing">
              <Button 
                size="icon"
                className="neomorph-hover w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/90 to-primary transition-all duration-300 hover:scale-110"
              >
                <Icon name="DollarSign" size={36} />
              </Button>
            </Link>
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