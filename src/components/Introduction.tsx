"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, Heart, Users, Award, ShieldCheck, ChevronRight } from "lucide-react";

const teamPhotos = [
  {
    id: "candid",
    label: "Team Collaboration",
    src: "/images/fami-team-candid.jpg",
    alt: "Fami Hair and Beauty Salon team smiling and consulting together",
    caption: "Our caring team of passionate stylists and beauty therapists",
  },
  {
    id: "studio",
    label: "Official Specialists",
    src: "/images/fami-team-studio.png",
    alt: "Fami Hair & Beauty Salon certified professional team",
    caption: "Fully qualified experts in hair, makeup, henna & advanced aesthetics",
  },
  {
    id: "celebration",
    label: "Salon Culture",
    src: "/images/fami-team-salon.jpg",
    alt: "Fami Hair and Beauty Salon festive celebration and creative artistry",
    caption: "A welcoming, joyful, and creative salon atmosphere for all clients",
  },
];

const highlightedTreatments = [
  "Hair Styling, Precision Cuts & Colour",
  "Professional & Bespoke Bridal Make-Up",
  "100% Organic Henna Artistry (Mehndi)",
  "Eyebrow Shaping, Threading & Styling",
  "Smooth Waxing & Gentle Hair Removal",
  "Skin Rejuvenation & Glow Facials",
  "Advanced Aesthetic & Anti-Ageing Services",
  "PRP Hair Restoration & Vampire Facials",
];

export default function Introduction() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
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
            Where luxury expertise meets personalized care. Enhancing your beauty, inspiring your confidence.
          </p>
        </div>

        {/* Main Grid: Visual Team Showcase + Official Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 cols): Authentic Team Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive Photo Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src={teamPhotos[activePhoto].src}
                  alt={teamPhotos[activePhoto].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>

              {/* Photo Caption Overlay */}
              <div className="p-3.5 bg-slate-900/90 text-white text-xs flex items-center justify-between border-t border-white/10">
                <span className="truncate pr-2 font-medium">{teamPhotos[activePhoto].caption}</span>
                <span className="text-[10px] text-pink-300 font-bold uppercase shrink-0">
                  {activePhoto + 1} / {teamPhotos.length}
                </span>
              </div>
            </div>

            {/* Photo Selector Switcher */}
            <div className="grid grid-cols-3 gap-2">
              {teamPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActivePhoto(idx)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer border ${
                    activePhoto === idx
                      ? "bg-[#1a237e] text-white border-[#1a237e] shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {photo.label}
                </button>
              ))}
            </div>

            {/* Founder Card Spotlight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f0f2fa] border border-[#c5cae9] flex items-center gap-4 shadow-sm">
              <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 border-[#1a237e] shrink-0 shadow">
                <Image
                  src="/images/fami-founder.jpg"
                  alt="Farzana (Fami) - Founder & Lead Aesthetician"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-block px-2 py-0.5 rounded bg-white text-[#d81b60] text-[10px] font-bold uppercase tracking-wider border border-[#f8bbd0]">
                  Founder &amp; Master Aesthetician
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#1a237e] leading-tight">
                  Farzana (Fami)
                </h4>
                <p className="text-xs text-slate-600 leading-snug">
                  15+ years passionate experience dedicated to bespoke bridal glam, hair artistry, and clinical aesthetics.
                </p>
              </div>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                <Users className="w-5 h-5 text-[#1a237e] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">8+ Specialists</p>
                  <p className="text-[11px] text-slate-500">Dedicated Experts</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                <Award className="w-5 h-5 text-[#d81b60] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Fully Accredited</p>
                  <p className="text-[11px] text-slate-500">VTCT &amp; iTEC Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Full Official About Story */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Opening Headline Callout */}
            <div className="p-5 rounded-2xl bg-[#fdf2f6] border border-[#f8bbd0]">
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                At <span className="text-[#1a237e] font-bold">Fami Hair &amp; Beauty Salon</span>, we believe that beauty is more than just appearance — it’s about confidence, self-care, and feeling your very best.
              </p>
            </div>

            {/* Official Narrative Paragraphs */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                We are passionate about providing professional <strong className="text-slate-900 font-semibold">hair, beauty, make-up, bridal make-up, henna artistry, eyebrow services, hair removal, rejuvenation, advanced aesthetic, and PRP treatments</strong> in a welcoming, relaxing, and comfortable environment. Our aim is to help every client look and feel confident through personalised treatments tailored to their individual needs, preferences, and beauty goals.
              </p>

              <p>
                From beautiful hairstyles and expert hair care to <strong className="text-slate-900 font-semibold">professional make-up and stunning bridal make-up</strong>, our talented team is dedicated to helping you look and feel your best on every occasion, especially your special day. We also offer <strong className="text-slate-900 font-semibold">expert henna artistry, professional eyebrow shaping and styling, hair removal, rejuvenation treatments, advanced aesthetic services, and PRP treatments</strong> to enhance your natural beauty.
              </p>

              {/* Client Commitment Quote Box */}
              <div className="p-5 rounded-xl bg-[#f0f2fa] border-l-4 border-[#1a237e] text-slate-900 shadow-xs">
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

            {/* Service Tags Grid */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Treatments Tailored To You
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlightedTreatments.map((treatment) => (
                  <div
                    key={treatment}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d81b60] shrink-0" />
                    <span>{treatment}</span>
                  </div>
                ))}
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
