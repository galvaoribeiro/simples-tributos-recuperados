
import React from 'react';

const VideoDemo = () => {
  return (
    <section id="video-demo" className="py-16 bg-auditor-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-auditor-deepBlue mb-3">
            Veja em Ação
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-inter">
            Veja como o Auditor Simples funciona em menos de 2 minutos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in">
          <div className="relative aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            {/* This would be replaced with actual video embed in a real implementation */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-auditor-deepBlue/10 to-auditor-skyBlue/10">
              <div className="w-20 h-20 rounded-full bg-auditor-deepBlue flex items-center justify-center shadow-lg cursor-pointer hover:bg-auditor-skyBlue transition-colors">
                <svg 
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
              alt="Video thumbnail" 
              className="w-full h-full object-cover opacity-75"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 font-inter">
              Veja como é fácil começar a recuperar tributos usando nossa plataforma intuitiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
