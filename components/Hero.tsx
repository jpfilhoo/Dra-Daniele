
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-accent/30 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-[fadeIn_0.8s_ease-out]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>Médica Psiquiatra</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand leading-[1.1]">
              Cuidado humano para sua <span className="text-brand-light italic">saúde mental.</span>
            </h1>
            
            <p className="text-lg text-brand/70 max-w-lg leading-relaxed">
              Dra. Daniele Fernandes Holanda oferece suporte especializado para diversos transtornos mentais, priorizando o acolhimento, o diagnóstico preciso e o tratamento individualizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="bg-brand text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-brand-light transition-all shadow-xl shadow-brand/20 hover:-translate-y-1">
                Agendar Atendimento
              </a>
              <a href="#especialidades" className="bg-white text-brand border-2 border-brand/10 px-8 py-4 rounded-xl font-bold text-center hover:bg-brand-soft transition-all">
                Conhecer Áreas de Atuação
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-8 border-t border-brand/10">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Pacientes atendidos" />
                ))}
              </div>
              <p className="text-sm text-brand/60">
                <span className="font-bold text-brand italic">+500 pacientes</span> acompanhados com dedicação.
              </p>
            </div>
          </div>

          <div className="relative group animate-[slideInRight_1s_ease-out]">
            <div className="absolute -inset-4 bg-brand/5 rounded-[40px] transform rotate-3 transition-transform group-hover:rotate-1" />
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:aspect-auto">
              <img 
                src="https://institutosaudevida.com/fotos/inicio.jpg" 
                alt="Dra. Daniele Fernandes Holanda" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Info Box */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-brand/5 animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-brand/10 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.735 11.735 0 00-1.59 11.512 11.952 11.952 0 0012.911 8.358 11.952 11.952 0 0012.911-8.358 11.735 11.735 0 00-1.59-11.512z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-brand/60 uppercase font-bold tracking-widest">Compromisso</p>
                  <p className="text-sm font-bold text-brand">Tratamento Ético & Humano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
