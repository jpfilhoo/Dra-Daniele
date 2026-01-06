
import React from 'react';

const specialties = [
  { title: "Transtornos Depressivos", desc: "Acompanhamento integral para superação da depressão e resgate da vitalidade." },
  { title: "Ansiedade Generalizada", desc: "Controle de sintomas ansiosos, crises de pânico e agorafobia." },
  { title: "TDAH", desc: "Diagnóstico e tratamento para melhorar o foco e desempenho na vida adulta e juvenil." },
  { title: "Transtorno Alimentar", desc: "Abordagem multidisciplinar para transtornos como anorexia e bulimia." },
  { title: "Afetivo Bipolar", desc: "Estabilização do humor para uma vida equilibrada e produtiva." },
  { title: "Transtorno Obsessivo", desc: "Tratamento especializado para TOC e comportamentos repetitivos." },
  { title: "Esquizofrenia", desc: "Manejo clínico e suporte para transtornos psicóticos crônicos." },
  { title: "Síndromes Demenciais", desc: "Cuidado humanizado e suporte para pacientes com Alzheimer e outras demências." },
  { title: "Dependências Químicas", desc: "Apoio psiquiátrico no processo de desintoxicação e manutenção da sobriedade." },
  { title: "Transtornos do Sono", desc: "Soluções para insônia e outros distúrbios que afetam o descanso." },
  { title: "Estresse Pós Traumático", desc: "Tratamento de traumas e resgate da segurança emocional." },
  { title: "Ajustamento", desc: "Suporte em fases de transição difícil e mudanças de vida impactantes." },
];

const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-brand uppercase tracking-[0.2em]">Áreas de Atuação</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-brand">Especialidades Psiquiátricas</p>
          <p className="text-lg text-brand/60">Um olhar atento e especializado para cada nuance da mente humana, utilizando as melhores evidências científicas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl border border-brand/5 bg-brand-soft/50 hover:bg-brand hover:text-white transition-all duration-500 group cursor-default shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{item.title}</h3>
              <p className="text-brand/60 group-hover:text-white/80 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Services;
