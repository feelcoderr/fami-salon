"use client";

import Image from "next/image";
import {
  CheckCircle2,
  Sparkles,
  Heart,
  Users,
  Award,
  ShieldCheck,
  ChevronRight,
  Clock,
} from "lucide-react";

const salonCulturePhoto = {
  src: "/images/fami-team-salon.jpg",
  alt: "Fami Hair and Beauty Salon welcoming culture and team celebration",
  caption: "A welcoming, joyful, and creative salon atmosphere for all clients",
  label: "Salon Culture",
};

interface TreatmentItem {
  name: string;
  featured?: boolean;
  badge?: string;
  description?: string;
}

const highlightedTreatments: TreatmentItem[] = [
  {
    name: "Hydra Facial (Deep Cleanse, Hydration & LED)",
    featured: true,
    badge: "Featured Glow",
    description:
      "Vortex deep-pore cleansing, gentle exfoliation, active hydration & LED therapy",
  },
  { name: "Hair Styling, Precision Cuts & Colour" },
  { name: "Professional & Bespoke Bridal Make-Up" },
  { name: "100% Organic Henna Artistry (Mehndi)" },
  { name: "Eyebrow Shaping, Threading & Styling" },
  { name: "Smooth Waxing & Gentle Hair Removal" },
  { name: "Skin Rejuvenation & Glow Facials" },
  { name: "Advanced Aesthetic & Anti-Ageing Services" },
  { name: "PRP Hair Restoration & Vampire Facials" },
];

export default function Introduction() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Pill */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Fami Hair &amp; Beauty Salon</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] tracking-tight max-w-3xl leading-tight">
            Welcome to Fami Hair &amp; Beauty Salon
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
            Where luxury expertise meets personalized care. Enhancing your
            beauty, inspiring your confidence.
          </p>
        </div>

        {/* Main Grid: Authentic Visual Showcase + Official Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (5 cols): Authentic Visual & Salon Standards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Salon Atmosphere Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src={salonCulturePhoto.src}
                  alt={salonCulturePhoto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>

              {/* Photo Caption Overlay */}
              <div className="p-3.5 bg-slate-900/90 text-white text-xs flex items-center justify-between border-t border-white/10">
                <span className="truncate pr-2 font-medium">
                  {salonCulturePhoto.caption}
                </span>
                <span className="text-[10px] text-pink-300 font-bold uppercase shrink-0">
                  {salonCulturePhoto.label}
                </span>
              </div>
            </div>

            {/* Salon Experience & Operating Standards */}
            <div className="p-5 rounded-2xl bg-[#f0f2fa] border border-[#c5cae9] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a237e] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#d81b60]" />
                <span>Salon Experience &amp; Standards</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Enjoy a welcoming, relaxing, and comfortable environment dedicated to your personalized beauty care, with medical-grade hygiene and sterilized instruments.
              </p>
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-[#1a237e] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1a237e]" />
                  Mon – Sat: 10:00 AM – 7:00 PM
                </span>
                <span className="text-[#d81b60] font-bold">Sunday: Closed</span>
              </div>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                <Users className="w-5 h-5 text-[#1a237e] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    8+ Specialists
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Dedicated Experts
                  </p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                <Award className="w-5 h-5 text-[#d81b60] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">
                    Certified Team
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Industry Qualified
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Full Official About Story */}
          <div className="lg:col-span-7 space-y-6">
            {/* Opening Headline Callout */}
            <div className="p-5 rounded-2xl bg-[#fdf2f6] border border-[#f8bbd0]">
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                At{" "}
                <span className="text-[#1a237e] font-bold">
                  Fami Hair &amp; Beauty Salon
                </span>
                , we believe that beauty is more than just appearance it’s about
                confidence, self-care, and feeling your very best.
              </p>
            </div>

            {/* Official Narrative Paragraphs */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                We are passionate about providing professional{" "}
                <strong className="text-slate-900 font-semibold">
                  hair, beauty, make-up, bridal make-up, henna artistry, eyebrow
                  services, hair removal, Hydra Facials, rejuvenation, advanced
                  aesthetic, and PRP treatments
                </strong>{" "}
                in a welcoming, relaxing, and comfortable environment. Our aim
                is to help every client look and feel confident through
                personalised treatments tailored to their individual needs,
                preferences, and beauty goals.
              </p>

              <p>
                From beautiful hairstyles and expert hair care to{" "}
                <strong className="text-slate-900 font-semibold">
                  professional make-up and stunning bridal make-up
                </strong>
                , our talented team is dedicated to helping you look and feel
                your best on every occasion, especially your special day. We
                also offer{" "}
                <strong className="text-slate-900 font-semibold">
                  clinical Hydra Facials, expert henna artistry, professional
                  eyebrow shaping and styling, smooth hair removal, rejuvenation
                  treatments, advanced aesthetic services, and PRP treatments
                </strong>{" "}
                to enhance your natural beauty.
              </p>

              {/* Client Commitment Quote Box */}
              <div className="p-5 rounded-xl bg-[#f0f2fa] border-l-4 border-[#1a237e] text-slate-900 shadow-xs">
                <p className="italic font-medium text-sm sm:text-base leading-relaxed text-[#0d1242]">
                  &ldquo;We believe every client deserves to feel valued,
                  listened to, and cared for. That’s why we focus on attention
                  to detail, a personal approach, and creating an experience
                  that leaves you feeling refreshed, confident, and
                  radiant.&rdquo;
                </p>
              </div>

              <p>
                At Fami Hair &amp; Beauty Salon, your beauty journey is
                important to us. Whether you’re visiting for a fresh new
                hairstyle, bridal make-up for your special day, beautiful
                occasion make-up, intricate henna designs, perfectly shaped
                eyebrows, smooth skin through hair removal, or rejuvenating
                aesthetic treatments, we look forward to welcoming you.
              </p>

              <p className="font-heading text-lg font-bold text-[#d81b60] italic pt-1">
                Fami Hair &amp; Beauty Salon - Enhancing Your Beauty, Inspiring
                Your Confidence.
              </p>
            </div>

            {/* Service Tags Grid with Highlighted Hydra Facial */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Treatments Tailored To You
                </p>
                <span className="text-[11px] font-semibold text-[#d81b60]">
                  Bespoke Beauty Protocols
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlightedTreatments.map((treatment) =>
                  treatment.featured ? (
                    <div
                      key={treatment.name}
                      className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#fdf2f6] border-2 border-[#d81b60] text-[#1a237e] shadow-sm ring-1 ring-[#d81b60]/20"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#d81b60] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#1a237e] block leading-tight">
                            {treatment.name}
                          </span>
                          {treatment.description && (
                            <span className="text-xs font-normal text-slate-600 block mt-0.5">
                              {treatment.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-full bg-[#d81b60] text-white text-[11px] font-bold uppercase tracking-wider shadow-xs">
                        {treatment.badge}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={treatment.name}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 hover:border-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#d81b60] shrink-0" />
                      <span>{treatment.name}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Call to Actions — Strictly Solid colors */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a237e] hover:bg-[#121858] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
              >
                <span>Book Your Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fdf2f6] hover:bg-[#fce4ec] text-[#d81b60] text-sm font-semibold rounded-lg border border-[#f8bbd0] transition-colors cursor-pointer"
              >
                <span>Explore Full Service Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
