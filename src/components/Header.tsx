
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm py-3">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-auditor-deepBlue to-auditor-skyBlue p-2 rounded mr-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m5 12 5 5L20 7" />
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            </svg>
          </div>
          <h1 className="text-xl font-bold font-montserrat text-auditor-deepBlue">Auditor Simples</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#como-funciona" className="text-gray-700 hover:text-auditor-deepBlue font-inter text-sm">Como Funciona</a>
          <a href="#beneficios" className="text-gray-700 hover:text-auditor-deepBlue font-inter text-sm">Benefícios</a>
          <a href="#planos" className="text-gray-700 hover:text-auditor-deepBlue font-inter text-sm">Planos</a>
          <a href="#faq" className="text-gray-700 hover:text-auditor-deepBlue font-inter text-sm">FAQ</a>
        </nav>
        
        <div>
          <a 
            href="#contato" 
            className="bg-auditor-deepBlue text-white px-4 py-2 rounded shadow hover:bg-opacity-90 transition font-inter text-sm"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
