import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  
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
  
  // Check scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close menu when clicking outside or pressing Escape
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
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-background shadow-md transition-all duration-300",
          isScrolled ? "py-2" : "py-3 md:py-4"
        )}
      >
        {/* Mobile Menu Button - Only visible on mobile */}
        <button 
          onClick={toggleMenu} 
          className="text-foreground focus:outline-none md:hidden" 
          aria-label="Menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Logo */}
        <div className={cn(
          "text-center",
          isMobile ? "" : "ml-0"
        )}>
          <h1 className="font-cormorant font-bold text-xl md:text-2xl tracking-wider">
            BELLEZA<span className="text-primary">SPA</span>
          </h1>
        </div>
        
        {/* Desktop Navigation - Only visible on tablet/desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection("servicios")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("conocenos")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Conócenos
          </button>
          <button 
            onClick={() => scrollToSection("nuestrotrabajo")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Galería
          </button>
          <button 
            onClick={() => scrollToSection("agenda")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Agenda
          </button>
          <button 
            onClick={() => scrollToSection("contacto")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </div>
        
        {/* Contact Icon on Mobile / Social Media Icons on Desktop */}
        <div className="flex items-center space-x-4">
          <a 
            href="#contacto" 
            onClick={() => scrollToSection("contacto")}
            className="text-primary focus:outline-none md:hidden" 
            aria-label="Contacto"
          >
            <i className="fas fa-phone-alt text-lg"></i>
          </a>
          
          {/* Social Media Icons - Only visible on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-primary hover:text-muted-foreground transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-muted-foreground transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Only for mobile */}
      <div 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform menu-transition md:hidden",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-5 bg-primary">
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
              className="block w-full text-left px-5 py-3 text-foreground hover:bg-secondary transition-colors"
            >
              Servicios
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("conocenos")} 
              className="block w-full text-left px-5 py-3 text-foreground hover:bg-secondary transition-colors"
            >
              Conócenos
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("nuestrotrabajo")} 
              className="block w-full text-left px-5 py-3 text-foreground hover:bg-secondary transition-colors"
            >
              Nuestro Trabajo
            </button>
          </li>
          <li className="border-b border-gray-100">
            <button 
              onClick={() => scrollToSection("agenda")} 
              className="block w-full text-left px-5 py-3 text-foreground hover:bg-secondary transition-colors"
            >
              Agendá tu cita
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection("contacto")} 
              className="block w-full text-left px-5 py-3 text-foreground hover:bg-secondary transition-colors"
            >
              Contacto
            </button>
          </li>
        </ul>
        <div className="absolute bottom-0 w-full p-5 bg-secondary">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-primary hover:text-muted-foreground transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-primary hover:text-muted-foreground transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay for Mobile Menu */}
      <div 
        onClick={closeMenu}
        className={cn(
          "fixed inset-0 bg-foreground bg-opacity-50 z-40 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      ></div>
    </header>
  );
}
