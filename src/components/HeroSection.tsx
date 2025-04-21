
import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white via-auditor-lightGray to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-auditor-deepBlue leading-tight">
              Recupere Tributos com Simplicidade e Eficiência.
            </h2>
            
            <p className="text-lg font-inter text-gray-700 max-w-lg">
              Sistema inteligente de auditoria tributária para empresas que querem pagar menos e recuperar o que é seu por direito.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#planos" 
                className="bg-auditor-deepBlue hover:bg-auditor-deepBlue/90 text-white font-medium py-3 px-6 rounded-md transition-all transform hover:shadow-lg active:scale-95 text-center flex items-center justify-center"
              >
                Comece Agora
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              
              <a 
                href="#como-funciona" 
                className="text-auditor-deepBlue border border-auditor-deepBlue hover:bg-auditor-deepBlue/5 font-medium py-3 px-6 rounded-md transition-all text-center"
              >
                Veja Como Funciona
              </a>
            </div>
            
            <div className="pt-4 text-sm text-gray-600 font-inter flex items-center gap-2 flex-wrap">
              <span className="bg-gray-100 rounded-full px-3 py-1">100% Online</span>
              <span className="bg-gray-100 rounded-full px-3 py-1">Seguro</span>
              <span className="bg-gray-100 rounded-full px-3 py-1">Validado por Especialistas</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 opacity-0 animate-fade-in-delay">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-auditor-skyBlue/20 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-auditor-deepBlue/20 rounded-lg z-0"></div>
              
              <div className="relative z-10 bg-white p-3 rounded-xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                  alt="Dashboard Auditor Simples" 
                  className="rounded-lg w-full h-auto object-cover"
                />
                
                <div className="absolute -top-3 -right-3 bg-auditor-deepBlue text-white text-xs font-bold px-2 py-1 rounded-full">
                  30% economia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
