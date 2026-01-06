
import React from 'react';

const specialties = [
  { title: "Transtornos Depressivos", desc: "Acompanhamento integral para superação da depressão e resgate do equilíbrio emocional." },
  { title: "Transtornos de Ansiedade", desc: "Ansiedade Generalizada, Síndrome do Pânico e Agorafobia com suporte contínuo." },
  { title: "TDAH", desc: "Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade em adultos." },
  { title: "Transtornos Alimentares", desc: "Tratamento multidisciplinar focado na reabilitação da saúde e relação com a comida." },
  { title: "Transtorno Afetivo Bipolar", desc: "Manejo das oscilações de humor para garantir estabilidade e qualidade de vida." },
  { title: "TOC", desc: "Transtorno Obsessivo Compulsivo abordado com técnicas modernas e eficazes." },
  { title: "Esquizofrenia", desc: "Controle sintomático e reintegração social através de acompanhamento rigoroso." },
  { title: "Síndromes Demenciais", desc: "Diagnóstico e suporte para Alzheimer e outras condições neurodegenerativas." },
  { title: "Dependências Químicas", desc: "Abordagem ética e científica para o tratamento do uso de substâncias." },
  { title: "Transtornos do Sono", desc: "Investigação e tratamento para insônia, apneia e distúrbios do ritmo circadiano." },
  { title: "Estresse Pós Traumático", desc: "Superação de traumas e resgate da segurança através de suporte especializado." },
  { title: "Perturbações de Ajustamento", desc: "Auxílio em fases de grandes mudanças ou eventos estressores da vida." },
];

const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 reveal">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.25em]">Áreas de Atuação</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-brand">Cuidado Abrangente em Psiquiatria</p>
          <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
          <p className="text-lg text-brand/60 font-sans">
            Oferecemos suporte especializado para uma ampla gama de condições mentais, sempre com foco na individualidade do paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 rounded-[32px] border border-brand/5 bg-brand-soft hover:bg-brand hover:text-white transition-all duration-500 group cursor-default shadow-sm hover:shadow-2xl hover:-translate-y-2 reveal"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 group-hover:bg-white/20 flex items-center justify-center mb-8 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif leading-tight">{item.title}</h3>
              <p className="text-brand/60 group-hover:text-white/80 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
