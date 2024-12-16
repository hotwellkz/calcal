import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
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
}

export default App;
