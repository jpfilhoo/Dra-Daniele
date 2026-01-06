
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-soft">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-brand-accent/20 rounded-bl-[200px] hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 reveal">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-[0.15em] uppercase border border-brand/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              <span>Dra. Daniele Fernandes Holanda</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand leading-[1.1]">
              Cuidado especializado para a sua <span className="text-brand-light italic">saúde mental.</span>
            </h1>
            
            <p className="text-lg text-brand/70 max-w-xl leading-relaxed font-sans">
              Médica Psiquiatra focada no acolhimento humano e tratamentos baseados em evidências. Recupere sua qualidade de vida com um atendimento personalizado e ético.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#contato" className="bg-brand text-white px-10 py-5 rounded-2xl font-bold text-center hover:bg-brand-light transition-all shadow-xl shadow-brand/20 hover:-translate-y-1 active:scale-95">
                Agendar Consulta
              </a>
              <a href="#especialidades" className="bg-white text-brand border-2 border-brand/10 px-10 py-5 rounded-2xl font-bold text-center hover:bg-brand-soft transition-all hover:border-brand/20">
                Especialidades
              </a>
            </div>

            <div className="flex items-center space-x-5 pt-10 border-t border-brand/10">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-brand/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="Paciente" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-brand/60 leading-snug">
                <span className="font-bold text-brand block text-base">+500 pacientes</span> 
                atendidos com excelência e dedicação.
              </p>
            </div>
          </div>

          <div className="relative reveal" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-6 bg-brand/5 rounded-[50px] transform -rotate-2" />
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white aspect-[3/4] md:aspect-auto">
              <img 
                src="https://institutosaudevida.com/fotos/inicio.jpg" 
                alt="Dra. Daniele Fernandes Holanda" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Box Flutuante de Credibilidade */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-brand/5 animate-float">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-brand text-white rounded-2xl shadow-lg shadow-brand/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.735 11.735 0 00-1.59 11.512 11.952 11.952 0 0012.911 8.358 11.952 11.952 0 0012.911-8.358 11.735 11.735 0 00-1.59-11.512z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-brand/40 uppercase font-black tracking-widest">Atendimento Profissional</p>
                  <p className="text-base font-bold text-brand">CRM Especializado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
