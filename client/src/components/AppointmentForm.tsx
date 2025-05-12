export default function AppointmentForm() {
  return (
    <section id="agenda" className="py-16 px-6 bg-primary bg-opacity-10">
      <div className="container mx-auto max-w-xl">
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl font-semibold text-center mb-8">
          Agendá tu cita
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-6">
            Reserva una cita con nuestros especialistas de forma rápida y sencilla
            usando nuestro sistema online de reservas.
          </p>
          
          <a 
            href="https://calendly.com/moyanojjeronimo/service-digitalization"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-[#A87B5C] text-white font-medium px-8 py-4 rounded-md transition-colors duration-300 shadow-md"
          >
            Reservar cita en Calendly
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="font-cormorant text-xl font-semibold mb-4">Sistema de reservas online</h3>
          <p className="text-muted-foreground mb-6">
            Nuestro sistema de reservas a través de Calendly te permite:
          </p>
          <ul className="text-left mb-6 space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Ver horarios disponibles en tiempo real</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Elegir el día y hora que más te convenga</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Recibir confirmación inmediata por email</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Gestionar o reprogramar tu cita fácilmente</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground italic">
            El enlace te llevará a nuestro calendario de Calendly para completar la reserva
          </p>
        </div>
      </div>
    </section>
  );
}
