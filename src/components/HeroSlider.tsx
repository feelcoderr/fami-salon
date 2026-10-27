"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Sparkles } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=800&fit=crop",
    alt: "Professional hair care and styling at Fami Hair & Beauty Salon",
    badge: "Expert Hair Care & Restyling",
    headline: "Enhancing Your Beauty, Inspiring Your Confidence",
    subtext:
      "Precision cuts, luxury colour, and deep rejuvenation therapies tailored to your unique personal style.",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&h=800&fit=crop",
    alt: "Stunning bridal makeup and hair styling",
    badge: "Bridal & Occasion Specialists",
    headline: "Bespoke Bridal Make-Up & Hair",
    subtext:
      "Look and feel breathtaking on your special day with our signature camera-proof bridal glam and hair artistry.",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1600&h=800&fit=crop",
    alt: "Exquisite organic henna artistry and bridal mehndi",
    badge: "100% Organic Mehndi",
    headline: "Intricate Henna Artistry",
    subtext:
      "Storytelling bridal motifs and delicate festive patterns drawn with freshly mixed natural henna cones.",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&h=800&fit=crop",
    alt: "Advanced aesthetic treatments and skin rejuvenation",
    badge: "Advanced Aesthetics & PRP",
    headline: "PRP Treatments & Skin Rejuvenation",
    subtext:
      "Clinically guided Platelet-Rich Plasma scalp and facial therapies to naturally restore your glow and vitality.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[660px] overflow-hidden bg-slate-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Salon services showcase"
    >
      {/* Background Slide Image */}
      <Image
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        fill
        className="object-cover"
        priority={current === 0}
        sizes="100vw"
      />

      {/* Solid Dark Tint Overlay — STRICTLY NO GRADIENT */}
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-white space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#1a237e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#d81b60]" />
            <span>{slide.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {slide.headline}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {slide.subtext}
          </p>

          {/* Solid CTAs — STRICTLY NO GRADIENTS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1a237e] hover:bg-[#121858] text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors cursor-pointer"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Left / Right Nav Arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-[#1a237e] text-white rounded-full transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-[#1a237e] text-white rounded-full transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              idx === current ? "w-8 bg-[#d81b60]" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
