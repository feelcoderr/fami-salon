import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { CheckCircle2, Award, Users, Heart, Sparkles, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Fami Hair & Beauty Salon",
  description:
    "Learn about Fami Hair & Beauty Salon, our founder Farzana (Fami), certified team, and dedication to personalized hair, makeup, bridal, and advanced aesthetic treatments.",
};

const teamMembers = [
  {
    name: "Farzana (Fami)",
    role: "Founder & Master Aesthetician",
    experience: "15+ Years Experience",
    specialty: "Advanced Aesthetics, PRP, Microdermabrasion & Bridal Glamour",
    image: "/images/fami-founder.jpg",
  },
  {
    name: "Senior Hair Stylist",
    role: "Master Hair Artist",
    experience: "10+ Years Experience",
    specialty: "Balayage, Precision Cuts, Colour Correction & Keratin Therapies",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=750&fit=crop",
  },
  {
    name: "Bridal & Henna Specialist",
    role: "Lead Make-Up & Henna Artist",
    experience: "8+ Years Experience",
    specialty: "100% Organic Henna Artistry, Airbrush Bridal Glam & Occasion Styling",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=750&fit=crop",
  },
  {
    name: "Clinical Aesthetician",
    role: "Skin Health Practitioner",
    experience: "7+ Years Experience",
    specialty: "BioRepeel, Hydra Facial, Microneedling & Laser Hair Removal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop",
  },
];

const salonValues = [
  {
    title: "Personalised Care",
    description:
      "We believe every client deserves bespoke attention. Treatments are tailored to your unique beauty goals, facial anatomy, and skin profile.",
    icon: Heart,
  },
  {
    title: "Certified Excellence",
    description:
      "Fully certified practitioners delivering treatments to the highest professional, hygienic, and client safety standards.",
    icon: Award,
  },
  {
    title: "Welcoming & Relaxing",
    description:
      "A serene and comfortable salon environment where you can unwind, refresh, and enjoy uninterrupted self-care and rejuvenation.",
    icon: Sparkles,
  },
  {
    title: "Transparent & Honest",
    description:
      "Clear consultation, upfront competitive pricing, and honest clinical recommendations for real, long-lasting aesthetic results.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHero
          title="About Fami Hair & Beauty Salon"
          subtitle="Discover our passion for empowering your confidence through personalized hair, beauty, and advanced aesthetic excellence."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Section 1: Official Story & Studio Team Visuals */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Full Authentic Team Imagery */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src="/images/fami-team-candid.jpg"
                    alt="Fami Hair and Beauty Salon team smiling together"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-[#0d1242]/90 text-white text-xs flex justify-between items-center">
                    <span className="font-medium">Our caring, qualified salon specialists</span>
                    <span className="text-[10px] text-pink-300 font-bold uppercase">City Centre Studio</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src="/images/fami-team-studio.png"
                      alt="Fami Salon staff official portrait"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                      src="/images/fami-team-salon.jpg"
                      alt="Fami Salon welcoming culture"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Trust Callout */}
                <div className="p-5 rounded-2xl bg-[#f0f2fa] border border-[#c5cae9] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-[#1a237e]" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Dedicated Team of 8+</p>
                      <p className="text-xs text-slate-600">Hair, Beauty &amp; Aesthetics Experts</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#1a237e] text-white text-[11px] font-bold rounded-full">
                    Qualified Specialists
                  </span>
                </div>
              </div>

              {/* Right Column: Full Official About Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Our Mission &amp; Philosophy</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a237e] leading-tight">
                  Welcome to Fami Hair &amp; Beauty Salon
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                  <p className="text-base sm:text-lg font-semibold text-slate-900">
                    At <span className="text-[#1a237e]">Fami Hair &amp; Beauty Salon</span>, we believe that beauty is more than just appearance — it’s about confidence, self-care, and feeling your very best.
                  </p>

                  <p>
                    We are passionate about providing professional <strong className="text-slate-900">hair, beauty, make-up, bridal make-up, henna artistry, eyebrow services, hair removal, rejuvenation, advanced aesthetic, and PRP treatments</strong> in a welcoming, relaxing, and comfortable environment. Our aim is to help every client look and feel confident through personalised treatments tailored to their individual needs, preferences, and beauty goals.
                  </p>

                  <p>
                    From beautiful hairstyles and expert hair care to <strong className="text-slate-900">professional make-up and stunning bridal make-up</strong>, our talented team is dedicated to helping you look and feel your best on every occasion, especially your special day. We also offer <strong className="text-slate-900">expert henna artistry, professional eyebrow shaping and styling, hair removal, rejuvenation treatments, advanced aesthetic services, and PRP treatments</strong> to enhance your natural beauty.
                  </p>

                  <div className="p-5 rounded-xl bg-[#f0f2fa] border-l-4 border-[#1a237e] text-slate-900">
                    <p className="italic font-medium text-sm sm:text-base leading-relaxed text-[#0d1242]">
                      &ldquo;We believe every client deserves to feel valued, listened to, and cared for. That’s why we focus on attention to detail, a personal approach, and creating an experience that leaves you feeling refreshed, confident, and radiant.&rdquo;
                    </p>
                  </div>

                  <p>
                    At Fami Hair &amp; Beauty Salon, your beauty journey is important to us. Whether you’re visiting for a fresh new hairstyle, bridal make-up for your special day, beautiful occasion make-up, intricate henna designs, perfectly shaped eyebrows, smooth skin through hair removal, or rejuvenating aesthetic treatments, we look forward to welcoming you.
                  </p>

                  <p className="font-heading text-lg font-bold text-[#d81b60] italic pt-1">
                    Fami Hair &amp; Beauty Salon — Enhancing Your Beauty, Inspiring Your Confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Founder Spotlight Card */}
        <section className="py-16 sm:py-20 bg-[#f8f9fc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-48 h-64 rounded-2xl overflow-hidden border-4 border-[#1a237e] shadow-lg shrink-0">
                    <Image
                      src="/images/fami-founder.jpg"
                      alt="Farzana (Fami) - Founder & Lead Aesthetician"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div className="inline-block px-3 py-1 rounded bg-[#fdf2f6] text-[#d81b60] text-xs font-bold uppercase tracking-wider border border-[#f8bbd0]">
                    Founder &amp; Master Aesthetician
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a237e]">
                    Farzana (Fami)
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    With over 15 years of distinguished experience in beauty therapy and clinical aesthetics, Farzana founded Fami Hair &amp; Beauty Salon with a singular mission: to blend premium salon artistry with state-of-the-art non-surgical aesthetics under one roof.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Farzana personally oversees our advanced skincare, BioRepeel, Hydra Facial protocols, and bespoke bridal hair &amp; makeup artistry to ensure flawless standards and radiant client satisfaction.
                  </p>
                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a237e] hover:bg-[#121858] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Book Consultation With Farzana</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Values / Why We Are Different */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a237e] tracking-tight">
                Our Core Values &amp; Client Promise
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Every appointment is crafted around safety, luxury comfort, and transformative results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {salonValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#1a237e]/40 hover:shadow-md transition-all flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f0f2fa] border border-[#c5cae9] flex items-center justify-center text-[#1a237e] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#1a237e] mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4: CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
