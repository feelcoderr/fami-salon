import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Accreditations from "@/components/Accreditations";
import Introduction from "@/components/Introduction";
import FeaturedServices from "@/components/FeaturedServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Accreditations />
        <Introduction />
        <FeaturedServices />
        <WhyChooseUs />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
