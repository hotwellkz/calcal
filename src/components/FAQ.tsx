import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <HelpCircle className="w-10 h-10 text-red-500 mr-4" />
          <h2 className="text-3xl font-bold text-white">Частые вопросы</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Как точно рассчитываются калории?
            </h3>
            <p className="text-gray-400">
              Мы используем формулу Миффлина-Сан Жеора, которая учитывает ваш возраст, рост, вес, пол и уровень активности.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Сколько калорий нужно для похудения?
            </h3>
            <p className="text-gray-400">
              Для безопасного похудения рекомендуется дефицит 15-20% от вашей суточной нормы калорий.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Как часто нужно пересчитывать калории?
            </h3>
            <p className="text-gray-400">
              Рекомендуется пересчитывать норму калорий каждые 2-3 недели или при изменении веса более чем на 2-3 кг.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-3">
              Учитывается ли физическая активность?
            </h3>
            <p className="text-gray-400">
              Да, калькулятор учитывает ваш уровень физической активности при расчете суточной нормы калорий.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;