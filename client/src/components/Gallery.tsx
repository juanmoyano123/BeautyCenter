import { gallery } from "@/lib/utils";

export default function Gallery() {
  return (
    <section id="nuestrotrabajo" className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="font-cormorant text-foreground text-3xl md:text-4xl font-semibold text-center mb-12">
          Nuestro Trabajo
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div 
              key={item.id}
              className="relative rounded-lg overflow-hidden shadow-md aspect-square"
            >
              <img 
                className="w-full h-full object-cover" 
                src={item.image} 
                alt={item.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
