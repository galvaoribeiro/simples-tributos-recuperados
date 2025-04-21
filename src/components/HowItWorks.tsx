
import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Cadastre sua empresa',
    description: 'Preencha informações básicas sobre sua empresa para começarmos o processo de recuperação.',
    icon: (
      <svg className="w-8 h-8 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Importe seus documentos fiscais',
    description: 'Faça o upload de XMLs de notas fiscais, arquivos SPED e outros documentos relevantes.',
    icon: (
      <svg className="w-8 h-8 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Receba um relatório com oportunidades de crédito',
    description: 'Nossa tecnologia analisa seus dados e identifica créditos tributários não utilizados.',
    icon: (
      <svg className="w-8 h-8 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Recupere valores e reduza custos',
    description: 'Utilize as oportunidades identificadas para compensar tributos ou solicitar restituições.',
    icon: (
      <svg className="w-8 h-8 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Domine a Recuperação Tributária em Poucos Passos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Nossa plataforma simplifica o complexo processo de recuperação tributária, tornando-o acessível para empresas de todos os portes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 bg-auditor-lightGray rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-auditor-deepBlue/10 transition-colors">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold font-montserrat text-auditor-deepBlue mb-2">
                <span className="text-auditor-skyBlue mr-2">{step.id}.</span>
                {step.title}
              </h3>
              
              <p className="text-gray-600 font-inter">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-auditor-lightGray rounded-lg p-6 inline-block max-w-2xl mx-auto">
            <p className="flex items-center font-medium text-auditor-deepBlue">
              <svg className="w-5 h-5 mr-2 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>Bônus: Inclui módulo gratuito de capacitação em planejamento tributário!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
