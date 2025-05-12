import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header className="relative">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-isabelline shadow-md">
        {/* Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="text-eerieBlack focus:outline-none" 
          aria-label="Menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Logo */}
        <div className="text-center">
          <h1 className="font-cormorant font-bold text-xl tracking-wider">BELLEZA<span className="text-lion">SPA</span></h1>
        </div>
        
        {/* Contact Icon */}
        <a 
          href="#contacto" 
          onClick={() => scrollToSection("contacto")}
          className="text-lion focus:outline-none" 
          aria-label="Contacto"
        >
          <i className="fas fa-phone-alt text-lg"></i>
        </a>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform menu-transition",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-5 bg-lion">
          <div className="flex justify-between items-center">
            <h2 className="font-cormorant text-white text-xl font-semibold">Menú</h2>
            <button onClick={closeMenu} className="text-white focus:outline-none">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        </div>
        <ul className="py-4">
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("servicios")} 
              className="block w-full text-left px-5 py-3 text-eerieBlack hover:bg-almond transition-colors"
            >
              Servicios
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("conocenos")} 
              className="block w-full text-left px-5 py-3 text-eerieBlack hover:bg-almond transition-colors"
            >
              Conócenos
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("nuestrotrabajo")} 
              className="block w-full text-left px-5 py-3 text-eerieBlack hover:bg-almond transition-colors"
            >
              Nuestro Trabajo
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("agenda")} 
              className="block w-full text-left px-5 py-3 text-eerieBlack hover:bg-almond transition-colors"
            >
              Agendá tu cita
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("contacto")} 
              className="block w-full text-left px-5 py-3 text-eerieBlack hover:bg-almond transition-colors"
            >
              Contacto
            </button>
          </li>
        </ul>
        <div className="absolute bottom-0 w-full p-5 bg-almond">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-lion hover:text-battleship transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-lion hover:text-battleship transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay for Mobile Menu */}
      <div 
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 bg-eerieBlack bg-opacity-50 z-40",
          isMenuOpen ? "block" : "hidden"
        )}
      ></div>
    </header>
  );
}
