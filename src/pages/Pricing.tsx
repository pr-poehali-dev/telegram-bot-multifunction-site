import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
      <nav className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 neomorph-hover px-4 py-2 rounded-2xl">
            <Icon name="Bot" size={28} className="text-primary" />
            <span className="font-bold text-xl">AI Bot</span>
          </Link>
          
          <div className="flex gap-4">
            <Link to="/">
              <Button className="neomorph-hover rounded-xl bg-primary text-primary-foreground">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                На главную
              </Button>
            </Link>
            <Button className="neomorph-hover rounded-xl bg-secondary text-secondary-foreground">
              <Icon name="Send" size={18} className="mr-2" />
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="neomorph rounded-3xl p-8 mb-12 bg-gradient-to-r from-primary/20 to-accent/20 text-center relative overflow-hidden">
            <div className="absolute top-4 right-4 neomorph rounded-full px-4 py-2 bg-destructive text-white text-sm font-bold animate-pulse-glow">
              -50% 🔥
            </div>
            <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Специальное предложение!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Первый месяц со скидкой 50% на любой платный тариф. 
              Успейте воспользоваться акцией до конца месяца!
            </p>
            <div className="mt-6 flex gap-4 justify-center flex-wrap">
              <div className="neomorph rounded-2xl px-6 py-3 bg-card">
                <p className="text-sm text-muted-foreground">Про</p>
                <p className="text-2xl font-bold">
                  <span className="line-through text-muted-foreground">100₽</span> 
                  <span className="text-primary ml-2">50₽</span>
                </p>
              </div>
              <div className="neomorph rounded-2xl px-6 py-3 bg-card">
                <p className="text-sm text-muted-foreground">Бизнес</p>
                <p className="text-2xl font-bold">
                  <span className="line-through text-muted-foreground">400₽</span> 
                  <span className="text-primary ml-2">200₽</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Тарифные планы
            </h1>
            <p className="text-xl text-muted-foreground">Выберите подходящий вариант для ваших задач</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
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
                  {plan.price !== '0' && (
                    <p className="text-xs text-primary mt-2 font-semibold">
                      Первый месяц: {parseInt(plan.price) / 2}₽
                    </p>
                  )}
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

          <div className="neomorph rounded-3xl p-8 bg-card text-center">
            <Icon name="HelpCircle" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Нужна помощь с выбором?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальный тариф под ваши задачи 
              и ответят на все вопросы
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="outline" className="neomorph rounded-xl">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Написать в поддержку
              </Button>
              <Button variant="outline" className="neomorph rounded-xl">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Нужно индивидуальное решение для компании?
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
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/">
              <Button variant="ghost" size="sm">Главная</Button>
            </Link>
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

export default Pricing;