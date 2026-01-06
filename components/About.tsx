
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-brand-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
               <img 
                 src="https://picsum.photos/seed/doctor/800/800" 
                 alt="Profissionalismo" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent rounded-[60px] -z-10" />
             <div className="absolute top-10 -left-10 w-24 h-24 bg-brand/10 rounded-full blur-xl" />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em]">Trajetória Profissional</h2>
              <p className="text-4xl md:text-5xl font-serif font-bold text-brand">Dra. Daniele Fernandes Holanda</p>
            </div>
            
            <div className="space-y-6 text-brand/70 text-lg leading-relaxed">
              <p>
                Com anos de experiência clínica, a Dra. Daniele dedica sua carreira ao entendimento profundo dos transtornos mentais, unindo o rigor científico à empatia necessária para o tratamento psiquiátrico moderno.
              </p>
              <p>
                Sua abordagem foca no paciente como um todo, considerando aspectos biológicos, psicológicos e sociais. Acredita que a saúde mental é o pilar fundamental para uma vida plena e funcional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-brand/5">
                <p className="text-3xl font-serif font-bold text-brand mb-1">CRM</p>
                <p className="text-sm text-brand/60 uppercase font-bold tracking-widest">Inscrição Ativa</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-brand/5">
                <p className="text-3xl font-serif font-bold text-brand mb-1">RQE</p>
                <p className="text-sm text-brand/60 uppercase font-bold tracking-widest">Psiquiatria</p>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="flex items-center space-x-3 text-brand font-bold hover:underline group">
                <span>Ver currículo completo no Lattes</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
