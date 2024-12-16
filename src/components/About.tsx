import React from 'react';
import { Heart, Brain, Battery, Flame } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">О калориях и правильном питании</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Здоровье</h3>
            <p className="text-gray-400">
              Правильный подсчет калорий помогает поддерживать здоровый вес и улучшает общее самочувствие.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl">
            <Brain className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Энергия</h3>
            <p className="text-gray-400">
              Сбалансированное питание обеспечивает стабильный уровень энергии в течение дня.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl">
            <Battery className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Баланс</h3>
            <p className="text-gray-400">
              Достижение баланса между потреблением и расходом калорий - ключ к достижению целей.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl">
            <Flame className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Метаболизм</h3>
            <p className="text-gray-400">
              Понимание своих энергетических потребностей помогает оптимизировать метаболизм.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;