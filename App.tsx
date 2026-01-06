
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-soft selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
