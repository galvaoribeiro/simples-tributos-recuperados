
import React from 'react';

const testimonials = [
  {
    quote: "Recuperei R$18 mil em tributos sem sair do escritório.",
    author: "João",
    position: "Dono de restaurante",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    quote: "O sistema é simples de usar e o suporte é excelente.",
    author: "Marcela",
    position: "Contadora",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    quote: "Minha empresa não sabia que tinha direito a tanto.",
    author: "Carlos",
    position: "Lojista",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    quote: "Economizamos mais de 20% nos impostos com o Auditor Simples.",
    author: "Ana Lucia",
    position: "Diretora Financeira",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Empresas que confiaram no Auditor Simples
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Veja o que nossos clientes estão dizendo sobre a experiência com nossa plataforma
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-auditor-skyBlue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-700 font-inter flex-grow mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-auditor-skyBlue"
                  />
                </div>
                
                <div>
                  <h4 className="font-bold text-auditor-deepBlue font-montserrat">
                    {testimonial.author}
                  </h4>
                  
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#planos" 
            className="inline-block text-auditor-skyBlue hover:text-auditor-deepBlue font-medium transition-colors font-inter"
          >
            Junte-se a estes clientes satisfeitos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
