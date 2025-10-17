import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Gallery = () => {
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
          <h1 className="text-3xl font-bold">Галерея</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {Array(9).fill(null).map((_, index) => (
              <Card 
                key={index}
                className="neomorph-hover rounded-3xl border-0 bg-card overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground/30" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
