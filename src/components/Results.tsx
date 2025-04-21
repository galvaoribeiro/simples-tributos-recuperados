
import React from 'react';

const stats = [
  {
    label: "recuperados para nossos clientes",
    value: "+R$12 milhões",
    icon: (
      <svg className="w-12 h-12 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    label: "notas fiscais analisadas",
    value: "+45 mil",
    icon: (
      <svg className="w-12 h-12 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    )
  },
  {
    label: "de satisfação dos usuários",
    value: "96%",
    icon: (
      <svg className="w-12 h-12 text-auditor-skyBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
      </svg>
    )
  }
];

const Results = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Transparência e Eficiência em Números
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Veja o impacto real do Auditor Simples nas finanças das empresas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-white shadow-md border border-gray-100 opacity-0 animate-fade-in transform transition hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold font-montserrat text-auditor-deepBlue mb-2">
                {stat.value}
              </div>
              
              <p className="text-gray-600 font-inter">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 md:flex items-center justify-between bg-gradient-to-r from-auditor-deepBlue to-auditor-skyBlue rounded-xl p-8 shadow-lg opacity-0 animate-fade-in-slow text-white">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-montserrat mb-3">
              Resultados reais para sua empresa
            </h3>
            <p className="font-inter">
              Não se trata apenas de números impressionantes – é sobre dinheiro real que sua empresa deixou de recuperar. Nossos resultados falam por si.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href="#video-demo" 
              className="bg-white text-auditor-deepBlue hover:bg-auditor-lightGray font-bold py-3 px-6 rounded-md shadow transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Ver Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
