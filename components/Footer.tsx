
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-brand/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-serif text-lg">D</div>
              <span className="text-xl font-serif font-bold text-brand">Dra. Daniele</span>
            </div>
            <p className="text-brand/60 leading-relaxed max-w-xs">
              Acolhimento e suporte psiquiátrico especializado para promover sua saúde mental e qualidade de vida.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'linkedin'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center text-brand hover:bg-brand hover:text-white transition-all">
                   <span className="sr-only">{social}</span>
                   <div className="w-5 h-5 bg-current mask-contain" style={{ maskImage: `url('https://api.iconify.design/lucide:${social}.svg')` }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand mb-6 uppercase text-sm tracking-widest">Links</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-brand/60 hover:text-brand transition-colors">Início</a></li>
              <li><a href="#especialidades" className="text-brand/60 hover:text-brand transition-colors">Especialidades</a></li>
              <li><a href="#sobre" className="text-brand/60 hover:text-brand transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-brand/60 hover:text-brand transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand mb-6 uppercase text-sm tracking-widest">Áreas</h4>
            <ul className="space-y-4">
              <li><span className="text-brand/60">Transtornos de Ansiedade</span></li>
              <li><span className="text-brand/60">Depressão & Bipolaridade</span></li>
              <li><span className="text-brand/60">TDAH & Foco</span></li>
              <li><span className="text-brand/60">Transtornos do Sono</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand mb-6 uppercase text-sm tracking-widest">Contato</h4>
            <ul className="space-y-4 text-brand/60">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Endereço da Clínica, Sala 000, Bairro - Cidade/UF</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(00) 00000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-brand/40">
          <p>© {new Date().getFullYear()} Dra. Daniele Fernandes Holanda. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-brand">Privacidade</a>
            <a href="#" className="hover:text-brand">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
