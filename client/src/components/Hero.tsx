export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative pt-16 h-[85vh] min-h-[500px] flex items-center">
      {/* Hero background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-md">
          <h2 className="font-cormorant text-white text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Descubrí lo que podemos hacer por vos
          </h2>
          <p className="text-white text-lg mb-8">
            Agendá tu turno o llamada de manera simple y rápida
          </p>
          <button 
            onClick={scrollToServices}
            className="inline-block bg-primary hover:bg-[#A87B5C] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 shadow-md"
          >
            Conocé más
          </button>
        </div>
      </div>
    </section>
  );
}
