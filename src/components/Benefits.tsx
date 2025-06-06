
import React from 'react';

const benefits = [
  {
    title: 'Economia comprovada de até 30% nos tributos',
    description: 'Nossa tecnologia identifica oportunidades de economia que passam despercebidas',
    icon: (
      <svg className="w-10 h-10 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: 'Plataforma intuitiva, mesmo para quem não é contador',
    description: 'Interface amigável e orientação passo a passo para que qualquer pessoa possa usar, independente de conhecimento prévio em contabilidade.',
    icon: (
      <svg className="w-10 h-10 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    )
  },
  {
    title: 'Suporte especializado com consultores certificados',
    description: 'Conte com uma equipe de especialistas tributários prontos para ajudar em qualquer etapa do processo de recuperação.',
    icon: (
      <svg className="w-10 h-10 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    )
  },
  {
    title: 'Atualizações automáticas conforme a legislação',
    description: 'Nossa plataforma se mantém atualizada com as mudanças na legislação tributária, garantindo que você não perca oportunidades.',
    icon: (
      <svg className="w-10 h-10 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    )
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-auditor-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Benefícios do Auditor Simples
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Descubra como nossa solução pode transformar a gestão tributária da sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex items-start gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                {benefit.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold font-montserrat text-auditor-deepBlue mb-2">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 font-inter">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-auditor-deepBlue to-auditor-skyBlue rounded-lg p-8 text-white shadow-lg opacity-0 animate-fade-in-slow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-2">Pronto para recuperar o que é seu por direito?</h3>
              <p className="font-inter">Comece agora e veja resultados em semanas, não meses.</p>
            </div>
            
            <a 
              href="#planos" 
              className="bg-white text-auditor-deepBlue font-bold py-3 px-6 rounded-md transition-all transform hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
