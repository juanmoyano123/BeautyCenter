import { useEffect } from "react";

export default function AppointmentForm() {
  // Calendly script injection
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const existingScript = document.getElementById('calendly-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Clean up on component unmount
    return () => {
      // We don't remove the script as it might be used elsewhere
    };
  }, []);

  return (
    <section id="agenda" className="py-16 px-6 bg-primary bg-opacity-10">
      <div className="container mx-auto">
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl font-semibold text-center mb-12">
          Agendá tu cita
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 overflow-hidden" style={{ height: '700px' }}>
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/moyanojjeronimo/service-digitalization"
            style={{ minWidth: '320px', height: '650px' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
