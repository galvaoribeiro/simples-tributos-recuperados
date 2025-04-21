
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-auditor-deepBlue to-auditor-skyBlue rounded-xl overflow-hidden shadow-lg opacity-0 animate-fade-in">
          <div className="md:flex">
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-3xl font-bold font-montserrat text-white mb-4">
                Recupere o que é seu com apenas alguns cliques
              </h2>
              
              <p className="text-white/90 mb-8 font-inter">
                Comece hoje mesmo e surpreenda-se com os créditos que sua empresa pode recuperar. Nossa plataforma foi desenvolvida para simplificar o complexo processo de recuperação tributária.
              </p>
              
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center bg-white text-auditor-deepBlue font-bold py-4 px-8 rounded-md shadow-lg hover:bg-auditor-lightGray transition-colors active:scale-95 transform"
              >
                Quero Começar Agora!
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
            </div>
            
            <div className="md:w-2/5 bg-auditor-deepBlue/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <svg className="w-20 h-20 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <div className="mt-4 text-white font-montserrat font-bold">
                    Garantia de satisfação
                  </div>
                  <p className="text-white/80 text-sm mt-2 font-inter">
                    Se não encontrarmos economia para sua empresa, você não paga nada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
