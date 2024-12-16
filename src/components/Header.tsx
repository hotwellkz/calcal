import React from 'react';
import { Calculator, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import LanguageSwitch from './LanguageSwitch';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-6 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calculator className="w-8 h-8 text-red-500 mr-3" />
            <span className="text-white text-xl font-bold">CalorieCalc</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors">{t.calculator}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">{t.about}</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><LanguageSwitch /></li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 md:hidden z-50">
              <ul className="flex flex-col px-4 py-4 space-y-4 divide-y divide-gray-800">
                <li><a href="#calculator" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>{t.calculator}</a></li>
                <li><a href="#about" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>{t.about}</a></li>
                <li><a href="#faq" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>FAQ</a></li>
                <li className="pt-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <LanguageSwitch />
                  </div>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
