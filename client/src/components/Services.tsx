import { services } from "@/lib/utils";

export default function Services() {
  const scrollToAppointment = () => {
    const appointmentSection = document.getElementById("agenda");
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section id="servicios" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
          Servicios
        </h2>
        
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Nuestro equipo de profesionales está especializado en diversos tratamientos estéticos para brindarte la mejor experiencia.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative">
                <img 
                  className="w-full h-48 md:h-56 object-cover" 
                  src={service.image} 
                  alt={service.alt} 
                />
                <div className="absolute inset-0 bg-primary bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="font-cormorant text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <button 
                  onClick={scrollToAppointment}
                  className="text-primary font-medium hover:text-muted-foreground transition-colors flex items-center"
                >
                  <span>Reservar ahora</span>
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop: Call to Action */}
        <div className="mt-16 hidden md:block text-center">
          <button 
            onClick={scrollToAppointment}
            className="inline-block bg-primary hover:bg-[#A87B5C] text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 shadow-md"
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
}
