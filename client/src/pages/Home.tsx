import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import AppointmentForm from "@/components/AppointmentForm";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-isabelline">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <AppointmentForm />
      <Testimonial />
      <Footer />
    </div>
  );
}
