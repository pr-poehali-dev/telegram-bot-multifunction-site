import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const features = [
    {
      icon: 'Globe',
      title: 'Поддержка 100+ языков',
      description: 'Бот общается на любом языке мира: от английского до японского'
    },
    {
      icon: 'Zap',
      title: 'Мгновенные ответы',
      description: 'Искусственный интеллект обрабатывает запросы за миллисекунды'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Шифрование всех диалогов и защита конфиденциальности'
    },
    {
      icon: 'Bot',
      title: 'Умное обучение',
      description: 'Бот адаптируется под стиль общения каждого пользователя'
    },
    {
      icon: 'Sparkles',
      title: 'Креативные решения',
      description: 'Генерация идей, текстов и помощь в творческих задачах'
    },
    {
      icon: 'Users',
      title: 'Групповые чаты',
      description: 'Интеграция в группы и каналы с поддержкой команд'
    }
  ];

  const plans = [
    {
      name: 'Старт',
      price: '0',
      period: 'бесплатно',
      features: ['100 запросов/день', 'Базовые функции', '10 языков', 'Email поддержка'],
      popular: false
    },
    {
      name: 'Про',
      price: '100',
      period: 'в месяц',
      features: ['5000 запросов/день', 'Все функции', 'Все языки', 'Приоритетная поддержка', 'API доступ'],
      popular: true
    },
    {
      name: 'Бизнес',
      price: '400',
      period: 'в месяц',
      features: ['Безлимит запросов', 'Кастомизация бота', 'Все языки', 'VIP поддержка 24/7', 'API + webhook', 'Аналитика'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block neomorph rounded-full px-6 py-2 mb-6 bg-background">
              <span className="text-primary font-medium flex items-center gap-2">
                <Icon name="Sparkles" size={18} />
                AI-powered Telegram Bot
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Умный бот для Telegram
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Искусственный интеллект с поддержкой множества языков. 
              Общайтесь на родном языке — бот вас поймёт
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="neomorph-hover text-lg px-8 py-6 rounded-3xl bg-primary text-primary-foreground shadow-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="neomorph text-lg px-8 py-6 rounded-3xl">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="neomorph rounded-3xl p-8 bg-card/50 backdrop-blur-sm animate-float">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/add35ec3-25f9-441f-a87f-ece8e02ade7b/files/480e6168-b3ef-4712-8c21-569096f15614.jpg" 
                alt="AI Telegram Bot Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Возможности бота</h2>
            <p className="text-xl text-muted-foreground">Всё, что нужно для эффективного общения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="neomorph-hover p-6 rounded-3xl border-0 bg-card cursor-pointer transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neomorph w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 neomorph rounded-3xl p-8 bg-primary/5 text-center">
            <Icon name="Languages" size={48} className="text-primary mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-2xl font-bold mb-3">Говорите на родном языке</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Английский, русский, китайский, арабский, испанский, французский и ещё 94+ языка. 
              Бот автоматически определяет язык и отвечает на нём
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант для ваших задач</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative neomorph-hover p-8 rounded-3xl border-0 cursor-pointer transition-all duration-300 ${
                  plan.popular ? 'bg-gradient-to-br from-primary/10 to-accent/10 scale-105' : 'bg-card'
                } ${selectedPlan === plan.name ? 'ring-4 ring-primary' : ''}`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 neomorph bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-2xl ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'neomorph'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Нужно индивидуальное решение?
            </p>
            <Button variant="link" className="text-primary">
              Связаться с отделом продаж
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
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
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="sm">О нас</Button>
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