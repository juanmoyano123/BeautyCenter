import { team } from "@/lib/utils";

export default function Team() {
  return (
    <section id="conocenos" className="py-16 px-6 bg-almond">
      <div className="container mx-auto">
        <h2 className="font-cormorant text-eerieBlack text-3xl md:text-4xl font-semibold text-center mb-12">
          Conócenos
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {team.map((member) => (
            <div key={member.id} className="team-card relative rounded-lg overflow-hidden">
              <img 
                className="w-full h-48 object-cover" 
                src={member.image} 
                alt={`${member.name} - ${member.role}`} 
              />
              <div className="p-3 bg-white">
                <h3 className="font-cormorant font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-taupe">{member.role}</p>
              </div>
              <div className="team-overlay absolute inset-0 bg-lion bg-opacity-20 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-3 rounded">
                  <p className="text-xs text-center">{member.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Our Workspace */}
        <div className="mb-12">
          <h3 className="font-cormorant text-2xl font-semibold text-center mb-6">Nuestro espacio</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              className="w-full h-64 md:h-96 object-cover" 
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Interior del centro de estética" 
            />
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-2xl mx-auto">
          <h3 className="font-cormorant text-2xl font-semibold mb-4">
            "Nos une la pasión por ayudarte a sentirte bien"
          </h3>
          <p className="text-taupe">
            Creemos que el verdadero cuidado estético va más allá de lo visible. Buscamos que cada persona que nos visita se sienta renovada, tanto por fuera como por dentro.
          </p>
        </div>
      </div>
    </section>
  );
}
