
import React from 'react';

const plans = [
  {
    name: "Básico",
    price: "R$97",
    period: "/mês",
    description: "Ideal para microempresas",
    features: [
      "Análise tributária mensal",
      "Até 100 notas fiscais/mês",
      "Relatório de créditos básico",
      "Suporte via chat",
      "Atualizações constantes"
    ],
    cta: "Começar Agora",
    popular: false
  },
  {
    name: "Profissional",
    price: "R$197",
    period: "/mês",
    description: "Mais popular – Empresas até R$4.8MM",
    features: [
      "Análise tributária avançada",
      "Até 500 notas fiscais/mês",
      "Relatórios detalhados",
      "Suporte via WhatsApp",
      "Atualizações constantes",
      "Acesso à biblioteca de casos"
    ],
    cta: "Escolher Plano Popular",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para grandes empresas e escritórios",
    features: [
      "Análise tributária completa",
      "Notas fiscais ilimitadas",
      "Relatórios personalizados",
      "Suporte dedicado",
      "Consultoria especializada",
      "Acesso à biblioteca de casos",
      "API para integração com sistemas existentes"
    ],
    cta: "Falar com Consultor",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="planos" className="py-16 bg-auditor-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Escolha o Plano Ideal para Sua Empresa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Investimento que se paga rapidamente com a recuperação de tributos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 opacity-0 animate-fade-in relative ${
                plan.popular 
                  ? 'bg-white border-2 border-auditor-skyBlue shadow-xl transform md:scale-105 md:-mt-4 md:mb-4' 
                  : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                  <span className="bg-auditor-skyBlue text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wide shadow-md">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold font-montserrat text-auditor-deepBlue mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-auditor-deepBlue">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 font-inter">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-auditor-skyBlue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contato" 
                  className={`block text-center py-3 px-6 rounded-md transition-all transform active:scale-95 font-medium w-full ${
                    plan.popular 
                      ? 'bg-auditor-deepBlue text-white hover:bg-auditor-deepBlue/90 shadow-md hover:shadow-lg' 
                      : 'bg-auditor-lightGray text-auditor-deepBlue hover:bg-auditor-deepBlue/10 border border-auditor-deepBlue'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in-slow">
          <h3 className="text-xl font-bold font-montserrat text-auditor-deepBlue mb-6">
            Todos os planos incluem:
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
              <svg className="w-5 h-5 text-auditor-skyBlue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <span className="text-gray-700 font-inter">Relatórios automáticos</span>
            </div>
            
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
              <svg className="w-5 h-5 text-auditor-skyBlue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span className="text-gray-700 font-inter">Suporte via WhatsApp</span>
            </div>
            
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
              <svg className="w-5 h-5 text-auditor-skyBlue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span className="text-gray-700 font-inter">Atualizações constantes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
