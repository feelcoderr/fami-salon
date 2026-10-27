import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BridalHennaSection from "@/components/BridalHennaSection";
import AestheticsPRPSection from "@/components/AestheticsPRPSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BridalHennaSection />
        <AestheticsPRPSection />
        <TestimonialsSection />
        <BookingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
