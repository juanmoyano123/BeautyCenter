export default function Footer() {
  // Function to scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer id="contacto" className="bg-almond py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="font-cormorant font-bold text-2xl tracking-wider mb-2">
              BELLEZA<span className="text-lion">SPA</span>
            </h2>
            <p className="text-taupe">Tu espacio de belleza y bienestar</p>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-6">
            <a href="#" className="text-lion hover:text-battleship transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-lion hover:text-battleship transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <button 
            onClick={() => scrollToSection("servicios")} 
            className="text-taupe hover:text-lion transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("conocenos")} 
            className="text-taupe hover:text-lion transition-colors"
          >
            Conócenos
          </button>
          <button 
            onClick={() => scrollToSection("contacto")} 
            className="text-taupe hover:text-lion transition-colors"
          >
            Contacto
          </button>
        </div>
        
        {/* Copyright & Credits */}
        <div className="text-center text-sm text-taupe">
          <p>&copy; {new Date().getFullYear()} BellezaSpa. Todos los derechos reservados.</p>
          <p className="mt-2">Hecho con <span className="text-red-500">❤️</span> por EliteFind</p>
        </div>
      </div>
    </footer>
  );
}
