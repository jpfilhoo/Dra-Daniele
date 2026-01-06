
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center text-white font-serif text-xl">D</div>
          <span className={`text-xl font-serif font-bold tracking-tight ${scrolled ? 'text-brand' : 'text-brand'}`}>
            Dra. Daniele Holanda
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Início</a>
          <a href="#especialidades" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Especialidades</a>
          <a href="#sobre" className="text-sm font-medium text-brand/80 hover:text-brand transition-colors">Sobre</a>
          <a href="#contato" className="bg-brand text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-light transition-all transform hover:scale-105 active:scale-95 shadow-md">
            Agendar Consulta
          </a>
        </div>

        <button className="md:hidden text-brand">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
