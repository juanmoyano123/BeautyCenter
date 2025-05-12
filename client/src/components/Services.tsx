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
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl font-semibold text-center mb-12">
          Servicios
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                className="w-full h-48 object-cover" 
                src={service.image} 
                alt={service.alt} 
              />
              <div className="p-5">
                <h3 className="font-cormorant text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <button 
                  onClick={scrollToAppointment}
                  className="text-primary font-medium hover:text-muted-foreground transition-colors"
                >
                  Reservar ahora →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
