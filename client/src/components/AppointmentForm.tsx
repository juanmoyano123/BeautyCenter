import { useEffect } from "react";

export default function AppointmentForm() {
  useEffect(() => {
    // Carga del script de Calendly
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type', 'text/javascript');
    head?.appendChild(script);

    // Inicia Calendly una vez cargado el script
    script.onload = () => {
      // @ts-ignore
      if (window.Calendly) {
        console.log("Calendly script loaded successfully");
      }
    };

    return () => {
      // Limpieza
      head?.removeChild(script);
    };
  }, []);

  // Función para abrir Calendly al hacer click en el botón
  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/moyanojjeronimo/service-digitalization',
      });
      return false;
    }
  };

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
          
          <button 
            onClick={openCalendly}
            className="inline-block bg-primary hover:bg-[#A87B5C] text-white font-medium px-8 py-4 rounded-md transition-colors duration-300 shadow-md"
          >
            Abrir calendario de citas
          </button>
        </div>
        
        {/* Iframe directo como backup */}
        <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
          <iframe
            src="https://calendly.com/moyanojjeronimo/service-digitalization?embed_domain=replit.com&embed_type=Inline"
            width="100%"
            height="600"
            frameBorder="0"
            title="Selecciona una fecha para tu cita"
            className="calendly-inline-widget"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
