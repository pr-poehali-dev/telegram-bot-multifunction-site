import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const CharacterCreator = () => {
  const [characterName, setCharacterName] = useState('');
  const [hairColor, setHairColor] = useState('#000000');
  const [skinTone, setSkinTone] = useState('#ffd5b8');
  const [eyeColor, setEyeColor] = useState('#4a4a4a');
  const [height, setHeight] = useState([170]);
  const [age, setAge] = useState([25]);
  const [bodyType, setBodyType] = useState('average');
  const [hairStyle, setHairStyle] = useState('short');
  const [style, setStyle] = useState<'realistic' | 'anime'>('realistic');

  const bodyTypes = [
    { id: 'slim', label: 'Худощавое', icon: 'User' },
    { id: 'average', label: 'Среднее', icon: 'User' },
    { id: 'athletic', label: 'Спортивное', icon: 'User' },
    { id: 'muscular', label: 'Мускулистое', icon: 'User' }
  ];

  const hairStyles = [
    { id: 'short', label: 'Короткие' },
    { id: 'medium', label: 'Средние' },
    { id: 'long', label: 'Длинные' },
    { id: 'bald', label: 'Лысый' },
    { id: 'curly', label: 'Кудрявые' }
  ];

  const handleGenerate = () => {
    console.log('Генерация персонажа:', {
      characterName,
      style,
      hairColor,
      skinTone,
      eyeColor,
      height: height[0],
      age: age[0],
      bodyType,
      hairStyle
    });
  };

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
          <h1 className="text-3xl font-bold">Создать персонажа</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="neomorph p-6 space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-semibold mb-2 block">
                    Имя персонажа
                  </Label>
                  <Input
                    id="name"
                    placeholder="Введите имя..."
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Стиль</Label>
                  <div className="flex gap-3">
                    <Button
                      variant={style === 'realistic' ? 'default' : 'outline'}
                      onClick={() => setStyle('realistic')}
                      className="flex-1 rounded-xl"
                    >
                      <Icon name="User" size={18} className="mr-2" />
                      Реальный
                    </Button>
                    <Button
                      variant={style === 'anime' ? 'default' : 'outline'}
                      onClick={() => setStyle('anime')}
                      className="flex-1 rounded-xl"
                    >
                      <Icon name="Sparkles" size={18} className="mr-2" />
                      Аниме
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">
                    Возраст: {age[0]} лет
                  </Label>
                  <Slider
                    value={age}
                    onValueChange={setAge}
                    min={18}
                    max={80}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">
                    Рост: {height[0]} см
                  </Label>
                  <Slider
                    value={height}
                    onValueChange={setHeight}
                    min={150}
                    max={200}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <Label className="text-lg font-semibold mb-3 block">Тип телосложения</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {bodyTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={bodyType === type.id ? 'default' : 'outline'}
                        onClick={() => setBodyType(type.id)}
                        className="rounded-xl"
                      >
                        <Icon name={type.icon as any} size={18} className="mr-2" />
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="neomorph p-6 space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-3 block">Прическа</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {hairStyles.map((hs) => (
                      <Button
                        key={hs.id}
                        variant={hairStyle === hs.id ? 'default' : 'outline'}
                        onClick={() => setHairStyle(hs.id)}
                        className="rounded-xl"
                      >
                        {hs.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="hairColor" className="text-lg font-semibold mb-2 block">
                    Цвет волос
                  </Label>
                  <div className="flex gap-3 items-center">
                    <Input
                      id="hairColor"
                      type="color"
                      value={hairColor}
                      onChange={(e) => setHairColor(e.target.value)}
                      className="w-20 h-12 rounded-xl cursor-pointer"
                    />
                    <span className="text-sm text-muted-foreground font-mono">{hairColor}</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="eyeColor" className="text-lg font-semibold mb-2 block">
                    Цвет глаз
                  </Label>
                  <div className="flex gap-3 items-center">
                    <Input
                      id="eyeColor"
                      type="color"
                      value={eyeColor}
                      onChange={(e) => setEyeColor(e.target.value)}
                      className="w-20 h-12 rounded-xl cursor-pointer"
                    />
                    <span className="text-sm text-muted-foreground font-mono">{eyeColor}</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="skinTone" className="text-lg font-semibold mb-2 block">
                    Тон кожи
                  </Label>
                  <div className="flex gap-3 items-center">
                    <Input
                      id="skinTone"
                      type="color"
                      value={skinTone}
                      onChange={(e) => setSkinTone(e.target.value)}
                      className="w-20 h-12 rounded-xl cursor-pointer"
                    />
                    <span className="text-sm text-muted-foreground font-mono">{skinTone}</span>
                  </div>
                </div>
              </Card>

              <Card className="neomorph p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Icon name="User" size={80} className="text-muted-foreground/30 mx-auto" />
                    <p className="text-sm text-muted-foreground">Предпросмотр персонажа</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              onClick={handleGenerate}
              className="neomorph-hover rounded-2xl px-12 py-6 text-lg bg-gradient-to-r from-primary to-accent"
            >
              <Icon name="Wand2" size={24} className="mr-3" />
              Сгенерировать персонажа
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterCreator;
