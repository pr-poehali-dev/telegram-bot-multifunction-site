import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<'realistic' | 'anime' | null>(null);
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  
  const imageSlots = Array(6).fill(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handleStyleClick = (style: 'realistic' | 'anime') => {
    if (selectedStyle === style) {
      setSelectedStyle(null);
      setSelectedGender(null);
    } else {
      setSelectedStyle(style);
      setSelectedGender(null);
    }
  };

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
          <div className="grid grid-cols-2 gap-6 mb-12">
            <Card
              className={`neomorph-hover rounded-3xl border-0 bg-card cursor-pointer transition-all duration-300 p-6 ${
                selectedStyle === 'realistic' ? 'ring-4 ring-primary scale-105' : ''
              }`}
              onClick={() => handleStyleClick('realistic')}
            >
              <div className="flex items-center justify-center gap-3">
                <Icon name="User" size={32} className={selectedStyle === 'realistic' ? 'text-primary' : 'text-muted-foreground'} />
                <h3 className="text-2xl font-bold">Реальный</h3>
              </div>
            </Card>

            <Card
              className={`neomorph-hover rounded-3xl border-0 bg-card cursor-pointer transition-all duration-300 p-6 ${
                selectedStyle === 'anime' ? 'ring-4 ring-primary scale-105' : ''
              }`}
              onClick={() => handleStyleClick('anime')}
            >
              <div className="flex items-center justify-center gap-3">
                <Icon name="Sparkles" size={32} className={selectedStyle === 'anime' ? 'text-primary' : 'text-muted-foreground'} />
                <h3 className="text-2xl font-bold">Аниме</h3>
              </div>
            </Card>
          </div>

          {selectedStyle && (
            <div className="animate-fade-in mb-12">
              <div className="grid grid-cols-2 gap-6">
                <Card
                  className={`neomorph-hover rounded-3xl border-0 bg-gradient-to-br from-primary/10 to-accent/10 cursor-pointer transition-all duration-300 p-8 ${
                    selectedGender === 'male' ? 'ring-4 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setSelectedGender(selectedGender === 'male' ? null : 'male')}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Icon name="User" size={48} className={selectedGender === 'male' ? 'text-primary' : 'text-foreground'} />
                    <h4 className="text-xl font-semibold">Мужчина</h4>
                    {selectedGender === 'male' && (
                      <Icon name="CheckCircle" size={24} className="text-primary animate-fade-in" />
                    )}
                  </div>
                </Card>

                <Card
                  className={`neomorph-hover rounded-3xl border-0 bg-gradient-to-br from-primary/10 to-accent/10 cursor-pointer transition-all duration-300 p-8 ${
                    selectedGender === 'female' ? 'ring-4 ring-primary scale-105' : ''
                  }`}
                  onClick={() => setSelectedGender(selectedGender === 'female' ? null : 'female')}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Icon name="UserRound" size={48} className={selectedGender === 'female' ? 'text-primary' : 'text-foreground'} />
                    <h4 className="text-xl font-semibold">Женщина</h4>
                    {selectedGender === 'female' && (
                      <Icon name="CheckCircle" size={24} className="text-primary animate-fade-in" />
                    )}
                  </div>
                </Card>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {imageSlots.map((_, index) => (
              <Card 
                key={index}
                className={`neomorph-hover rounded-3xl border-0 bg-card overflow-hidden group cursor-pointer transition-all duration-300 ${
                  clickedIndex === index ? 'ring-4 ring-primary scale-105' : ''
                }`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/15 transition-opacity duration-300 ${
                    hoveredIndex === index || clickedIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <Icon 
                      name={clickedIndex === index ? "CheckCircle" : "Image"} 
                      size={64} 
                      className={`transition-all duration-300 ${
                        clickedIndex === index 
                          ? 'text-primary scale-110' 
                          : hoveredIndex === index 
                          ? 'text-primary/60 scale-110' 
                          : 'text-muted-foreground/30'
                      }`} 
                    />
                    
                    {hoveredIndex === index && clickedIndex !== index && (
                      <div className="animate-fade-in">
                        <Button size="sm" className="rounded-full bg-primary text-primary-foreground">
                          <Icon name="Plus" size={16} className="mr-1" />
                          Добавить
                        </Button>
                      </div>
                    )}
                    
                    {clickedIndex === index && (
                      <div className="animate-fade-in text-center">
                        <p className="text-primary font-semibold">Выбрано</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute top-3 right-3 neomorph rounded-full w-10 h-10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <span className="text-sm font-bold text-foreground">{index + 1}</span>
                  </div>
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
