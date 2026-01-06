
import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand rounded-[50px] p-8 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/20 rounded-full -ml-32 -mb-32 blur-2xl" />
          
          <div className="relative z-10 grid lg:grid-cols-5 items-center gap-12">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Priorize seu bem-estar hoje mesmo.
              </h2>
              <p className="text-xl text-white/70 max-w-2xl">
                O primeiro passo para o equilíbrio emocional começa com uma conversa. Agende sua consulta presencial ou por telemedicina.
              </p>
            </div>
            
            <div className="lg:col-span-2 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a 
                href="https://wa.me/seunumeroaqui" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-white text-brand px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-soft transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:contato@dradaniele.com.br"
                className="flex items-center justify-center space-x-3 bg-brand-light text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand transition-all border border-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>E-mail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
