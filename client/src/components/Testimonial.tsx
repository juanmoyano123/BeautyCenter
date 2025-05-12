export default function Testimonial() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-lg">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <i className="fas fa-quote-left text-3xl text-lion opacity-50 mb-4"></i>
          <blockquote className="text-lg text-taupe mb-6">
            "Desde que usamos esta página, duplicamos los turnos online."
          </blockquote>
          <cite className="font-cormorant text-lg font-semibold block">
            Sofía, Estética Natural
          </cite>
        </div>
      </div>
    </section>
  );
}
