
import React, { useState } from 'react';

const faqs = [
  {
    question: "Preciso ser contador para usar?",
    answer: "Não, nossa plataforma foi desenvolvida para ser acessível a qualquer pessoa, independentemente do conhecimento técnico. A interface é intuitiva e o sistema guia você em cada etapa do processo."
  },
  {
    question: "Quais documentos preciso enviar?",
    answer: "Você precisará fornecer documentos fiscais como notas fiscais eletrônicas, arquivos SPED, EFD Contribuições, entre outros. Mas não se preocupe, nosso sistema irá guiá-lo sobre quais documentos são necessários para o seu caso específico."
  },
  {
    question: "É seguro compartilhar meus dados?",
    answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos rigorosos protocolos de segurança para proteger suas informações. Nosso sistema está em conformidade com a LGPD e não compartilhamos seus dados com terceiros sem seu consentimento."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos clientes começa a identificar oportunidades de economia em apenas 1 semana após o upload dos documentos. O processo completo de recuperação tributária pode levar de 30 a 90 dias, dependendo da complexidade do seu caso."
  },
  {
    question: "Como funciona o processo de recuperação?",
    answer: "Após identificarmos os créditos tributários, nosso sistema gera os documentos necessários para que você possa compensar esses valores em tributos futuros ou solicitar sua restituição às autoridades fiscais. Todo o processo é guiado e pode ser acompanhado em tempo real através da nossa plataforma."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-16 bg-auditor-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:flex">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="sticky top-24 opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold font-montserrat text-auditor-deepBlue mb-4">
                Perguntas Frequentes
              </h2>
              
              <p className="text-gray-600 font-inter mb-6">
                Tire suas dúvidas sobre o Auditor Simples e como podemos ajudar sua empresa a economizar.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-bold text-auditor-deepBlue font-montserrat">Precisa de mais ajuda?</h3>
                
                <a 
                  href="#contato"
                  className="flex items-center text-auditor-skyBlue hover:text-auditor-deepBlue transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <span className="font-inter">Converse no WhatsApp</span>
                </a>
                
                <a 
                  href="mailto:contato@auditorsimples.com.br"
                  className="flex items-center text-auditor-skyBlue hover:text-auditor-deepBlue transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-inter">contato@auditorsimples.com.br</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <div className="space-y-4 opacity-0 animate-fade-in">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                >
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <h3 className="font-bold text-auditor-deepBlue font-montserrat">
                      {faq.question}
                    </h3>
                    
                    <svg 
                      className={`w-5 h-5 text-auditor-skyBlue transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <div 
                    className={`px-6 pb-6 transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <p className="text-gray-600 font-inter">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
