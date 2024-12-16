import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">О проекте</h3>
            <p>
              Калькулятор калорий помогает рассчитать индивидуальную суточную норму калорий
              с учетом ваших параметров и целей.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О калориях</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Частые вопросы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Контакты</h3>
            <p>Email: info@caloriecalc.ru</p>
            <p>© 2024 CalorieCalc. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;