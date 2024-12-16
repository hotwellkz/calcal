import React from 'react';
import { Calculator, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-6">
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
              <li><a href="#calculator" className="text-gray-300 hover:text-white transition-colors">Калькулятор</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О калориях</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </nav>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 md:hidden">
              <ul className="flex flex-col px-4 py-4 space-y-4">
                <li><a href="#calculator" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>Калькулятор</a></li>
                <li><a href="#about" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>О калориях</a></li>
                <li><a href="#faq" className="block text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>FAQ</a></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;