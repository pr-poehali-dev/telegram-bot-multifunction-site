import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Shop = () => {
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
          <h1 className="text-3xl font-bold">Магазин</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Пустая страница магазина */}
        </div>
      </section>
    </div>
  );
};

export default Shop;
