
import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-auditor-lightGray rounded-xl overflow-hidden shadow-md md:flex">
            <div className="md:w-1/2 p-8 md:p-12 opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold font-montserrat text-auditor-deepBlue mb-4">
                Fale Conosco
              </h2>
              
              <p className="text-gray-600 font-inter mb-6">
                Preencha o formulário para iniciar uma conversa ou entre em contato pelos nossos canais de atendimento.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Nome completo
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-auditor-skyBlue focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-auditor-skyBlue focus:border-transparent"
                    placeholder="seu.email@empresa.com.br"
                  />
                </div>
                
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Empresa
                  </label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-auditor-skyBlue focus:border-transparent"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-auditor-skyBlue focus:border-transparent"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-auditor-deepBlue text-white font-medium py-3 px-4 rounded-md hover:bg-auditor-deepBlue/90 transition-colors active:scale-95 transform"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-auditor-deepBlue to-auditor-skyBlue p-8 md:p-12 text-white opacity-0 animate-fade-in-delay">
              <h3 className="text-2xl font-bold font-montserrat mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Telefone</h4>
                    <p className="font-inter">(11) 9999-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <p className="font-inter">contato@auditorsimples.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">Endereço</h4>
                    <p className="font-inter">Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold mb-4">Horário de atendimento</h4>
                <div className="bg-white/10 p-4 rounded-md backdrop-blur-sm font-inter">
                  <p className="text-white/90">Segunda a Sexta-feira</p>
                  <p className="font-bold">9h às 18h</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
