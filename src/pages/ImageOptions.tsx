import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ImageOptions = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imageId = searchParams.get('id') || '1';
  const imageType = searchParams.get('type') || 'realistic';

  const options = [
    {
      id: 1,
      title: 'Редактировать',
      description: 'Изменить параметры изображения',
      icon: 'Edit',
      color: 'from-blue-500/90 to-blue-600'
    },
    {
      id: 2,
      title: 'Удалить',
      description: 'Удалить это изображение',
      icon: 'Trash2',
      color: 'from-red-500/90 to-red-600'
    },
    {
      id: 3,
      title: 'Скачать',
      description: 'Сохранить изображение на устройство',
      icon: 'Download',
      color: 'from-green-500/90 to-green-600'
    },
    {
      id: 4,
      title: 'Поделиться',
      description: 'Отправить изображение другим',
      icon: 'Share2',
      color: 'from-purple-500/90 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="lg" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <h1 className="text-2xl font-bold">Изображение #{imageId}</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="neomorph rounded-3xl border-0 bg-card overflow-hidden mb-8">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
              <Icon name="Image" size={96} className="text-muted-foreground/30" />
              
              <div className="absolute top-4 left-4 neomorph rounded-full px-4 py-2 flex items-center gap-2 bg-background/50 backdrop-blur-sm">
                <Icon name={imageType === 'realistic' ? 'User' : 'Sparkles'} size={16} />
                <span className="text-sm font-semibold">
                  {imageType === 'realistic' ? 'Реальный' : 'Аниме'}
                </span>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            {options.map((option) => (
              <Card
                key={option.id}
                className="neomorph-hover rounded-3xl border-0 bg-card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => {}}
              >
                <div className="relative">
                  <div className={`aspect-square bg-gradient-to-br ${option.color}`}></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-3">
                    <p className="text-xs text-center font-extralight">{option.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageOptions;