import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const isMobile = window.innerWidth < 768;

  return (
    <div className={`flex items-center ${isMobile ? 'justify-between w-full px-2' : 'space-x-2'}`}>
      <Languages className="w-5 h-5 text-gray-400" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'ru' | 'en')}
        className={`bg-gray-800 text-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none
          ${isMobile ? 'px-4 py-2 flex-grow ml-4 text-base' : 'px-2 py-1 text-sm'}`}
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
