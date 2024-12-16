import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import { translations } from './translations';
import { useEffect } from 'react';

const AppContent = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
  }, [language, t.title, t.description]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <section id="calculator" className="py-16">
          <Calculator />
        </section>
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
