"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&h=700&fit=crop",
    alt: "Professional hair styling at Fami Salon",
    headline: "Expert Hair Styling",
    subtext: "From precision cuts to stunning colour — crafted for you.",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&h=700&fit=crop",
    alt: "Bridal makeup services",
    headline: "Bespoke Bridal Make-Up",
    subtext: "Look flawless on your special day with our bridal specialists.",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&h=700&fit=crop",
    alt: "Beauty treatment and facial care",
    headline: "Advanced Skin Treatments",
    subtext: "Rejuvenation facials, aesthetics, and PRP therapy.",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1400&h=700&fit=crop",
    alt: "Henna artistry and mehndi design",
    headline: "Intricate Henna Artistry",
    subtext: "Beautiful organic henna designs for every occasion.",
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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] lg:h-[680px] overflow-hidden bg-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured salon services"
    >
      {/* Current slide image */}
      <Image
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        fill
        className="object-cover"
        priority={current === 0}
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {slide.headline}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
            {slide.subtext}
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-sm cursor-pointer"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 bg-white text-foreground font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm cursor-pointer"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              idx === current ? "bg-pink-500" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
