import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [achievements, setAchievements] = useState([
    { id: 1, name: "Первый вход", description: "Войди в игру впервые", unlocked: true, icon: "Trophy" },
    { id: 2, name: "Выживший", description: "Продержись 5 ночей", unlocked: false, icon: "Clock" },
    { id: 3, name: "Охотник", description: "Найди всех персонажей", unlocked: false, icon: "Search" },
    { id: 4, name: "Мастер ритма", description: "Идеальный скор в музыкальной битве", unlocked: false, icon: "Music" }
  ]);

  const characters = [
    {
      id: 1,
      name: "Horror Mario",
      description: "Некогда веселый водопроводчик превратился в кошмарного стража. Его красная шапка теперь пропитана тьмой.",
      image: "img/d5433d68-371c-4878-8dbb-64c9e614961f.jpg",
      threat: "Высокая",
      location: "Главный коридор"
    },
    {
      id: 2,
      name: "Shadow Luigi",
      description: "Зеленый брат Марио потерял рассудок в темных залах. Теперь он охотится на любого, кто осмелится войти.",
      image: "img/00a2205d-5179-471f-a61f-42148a3755cf.jpg",
      threat: "Средняя",
      location: "Левое крыло"
    }
  ];

  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-horror-darkest text-white">
      {/* Header */}
      <header className="bg-horror-dark border-b border-horror-blood/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold font-['Oswald'] horror-text">
              FNAF MARIO FNF
            </h1>
            <nav className="hidden md:flex space-x-6">
              {['home', 'game', 'characters', 'story', 'soundtrack', 'community'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-horror-accent text-white animate-horror-glow'
                      : 'text-gray-300 hover:text-horror-accent hover:bg-horror-dark'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center py-16">
              <h2 className="text-6xl font-bold font-['Oswald'] mb-6 horror-text">
                Добро пожаловать в кошмар
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Погрузись в мрачный мир, где знакомые персонажи Mario встречаются с ужасами FNAF 
                и ритмами FNF. Сможешь ли ты выжить в этом музыкальном хорроре?
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => setActiveSection('game')}
                  className="bg-horror-accent hover:bg-horror-glow text-white px-8 py-3 text-lg animate-horror-glow"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать игру
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveSection('characters')}
                  className="border-horror-accent text-horror-accent hover:bg-horror-accent hover:text-white px-8 py-3 text-lg"
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Персонажи
                </Button>
              </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-3 gap-8">
              <Card className="bg-horror-dark border-horror-blood/30 hover:bg-horror-dark/80 transition-all duration-300 horror-glow">
                <CardHeader>
                  <Icon name="Gamepad2" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Игровой процесс</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Уникальное сочетание выживания FNAF и ритм-игры FNF в мире Mario</p>
                </CardContent>
              </Card>

              <Card className="bg-horror-dark border-horror-blood/30 hover:bg-horror-dark/80 transition-all duration-300 horror-glow">
                <CardHeader>
                  <Icon name="Music" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Саундтрек</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Атмосферная музыка и пугающие ремиксы классических мелодий Mario</p>
                </CardContent>
              </Card>

              <Card className="bg-horror-dark border-horror-blood/30 hover:bg-horror-dark/80 transition-all duration-300 horror-glow">
                <CardHeader>
                  <Icon name="Trophy" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Достижения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Система наград за успехи и секретные достижения для самых смелых</p>
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {activeSection === 'characters' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold font-['Oswald'] text-center horror-text mb-8">
              Персонажи кошмара
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {characters.map((character) => (
                <Card key={character.id} className="bg-horror-dark border-horror-blood/30 overflow-hidden hover:animate-shake">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={character.image} 
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={character.threat === 'Высокая' ? 'destructive' : 'secondary'}
                        className="bg-horror-blood text-white"
                      >
                        {character.threat} угроза
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-horror-accent font-['Oswald']">{character.name}</CardTitle>
                    <CardDescription className="text-gray-300">
                      Локация: {character.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{character.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'game' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold font-['Oswald'] text-center horror-text mb-8">
              Система достижений
            </h2>
            
            <Tabs defaultValue="achievements" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-horror-dark">
                <TabsTrigger value="achievements" className="data-[state=active]:bg-horror-accent">
                  Достижения
                </TabsTrigger>
                <TabsTrigger value="stats" className="data-[state=active]:bg-horror-accent">
                  Статистика
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="achievements" className="space-y-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className={`bg-horror-dark border-horror-blood/30 transition-all duration-300 ${
                    achievement.unlocked ? 'horror-glow' : 'opacity-60'
                  }`}>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className={`p-3 rounded-full ${
                        achievement.unlocked ? 'bg-horror-accent' : 'bg-gray-600'
                      }`}>
                        <Icon name={achievement.icon as any} size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white">{achievement.name}</h3>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <Badge className="bg-horror-accent text-white">
                          Получено
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="stats" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-horror-dark border-horror-blood/30">
                    <CardHeader>
                      <CardTitle className="text-horror-accent">Общая статистика</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Ночей выжито:</span>
                        <span className="text-white font-bold">3/5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Битв выиграно:</span>
                        <span className="text-white font-bold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Время игры:</span>
                        <span className="text-white font-bold">2ч 15м</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-horror-dark border-horror-blood/30">
                    <CardHeader>
                      <CardTitle className="text-horror-accent">Лучшие результаты</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Максимальный скор:</span>
                        <span className="text-white font-bold">95,430</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Лучшая точность:</span>
                        <span className="text-white font-bold">98.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Самая долгая игра:</span>
                        <span className="text-white font-bold">45 минут</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'story' && (
          <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold font-['Oswald'] text-center horror-text mb-8">
              История кошмара
            </h2>
            <Card className="bg-horror-dark border-horror-blood/30">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Когда-то Грибное королевство было местом радости и веселья. Марио и Луиджи были героями, 
                  спасавшими принцессу Пич от злых планов Боузера. Но всё изменилось той роковой ночью...
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Таинственная музыкальная шкатулка была найдена в заброшенном замке. Её мелодия обладала 
                  странной силой - она превращала всех, кто её слышал, в искажённые версии самих себя. 
                  Теперь знакомые герои стали кошмарными созданиями, жаждущими новых жертв.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ты - новый охранник в этом проклятом месте. Твоя задача - выжить пять ночей, 
                  используя только камеры безопасности и свои музыкальные навыки в ритмических битвах 
                  против монстров, которые когда-то были героями.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'soundtrack' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold font-['Oswald'] text-center horror-text mb-8">
              Саундтрек ужаса
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Main Theme (Horror Remix)", duration: "3:45", mood: "Тревожный" },
                { name: "Mario's Lament", duration: "4:12", mood: "Мрачный" },
                { name: "Luigi's Nightmare", duration: "3:28", mood: "Пугающий" },
                { name: "Final Showdown", duration: "5:33", mood: "Эпический" }
              ].map((track, index) => (
                <Card key={index} className="bg-horror-dark border-horror-blood/30 hover:horror-glow transition-all duration-300">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="p-3 rounded-full bg-horror-accent">
                      <Icon name="Music" size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white">{track.name}</h3>
                      <p className="text-gray-300 text-sm">{track.duration} • {track.mood}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-horror-accent hover:bg-horror-accent hover:text-white">
                      <Icon name="Play" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'community' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold font-['Oswald'] text-center horror-text mb-8">
              Сообщество выживших
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-horror-dark border-horror-blood/30">
                <CardHeader>
                  <Icon name="Users" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Форум</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Обсуждай стратегии выживания с другими игроками</p>
                  <Button className="w-full bg-horror-accent hover:bg-horror-glow">
                    Присоединиться
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-horror-dark border-horror-blood/30">
                <CardHeader>
                  <Icon name="Trophy" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Рейтинги</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Соревнуйся за место в таблице лидеров</p>
                  <Button className="w-full bg-horror-accent hover:bg-horror-glow">
                    Посмотреть
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-horror-dark border-horror-blood/30">
                <CardHeader>
                  <Icon name="Share" size={32} className="text-horror-accent mb-2" />
                  <CardTitle className="text-horror-accent">Поделиться</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Расскажи друзьям о своих достижениях</p>
                  <Button className="w-full bg-horror-accent hover:bg-horror-glow">
                    Поделиться
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-horror-dark border-t border-horror-blood/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 FNAF Mario FNF. Добро пожаловать в кошмар.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;