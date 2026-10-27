"use client";

import { useState } from "react";
import { SALON_SERVICES, ServiceItem } from "@/data/servicesData";
import { Sparkles, Scissors, Heart, Flower, Eye, Syringe, Clock, Tag, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Treatments", icon: Sparkles },
    { id: "hair", label: "Hair & Styling", icon: Scissors },
    { id: "makeup", label: "Bridal & Make-Up", icon: Heart },
    { id: "henna", label: "Henna Artistry", icon: Flower },
    { id: "brows-hair-removal", label: "Brows & Hair Removal", icon: Eye },
    { id: "aesthetics-prp", label: "Aesthetics & PRP", icon: Syringe },
  ];

  const filteredServices =
    activeCategory === "all"
      ? SALON_SERVICES
      : SALON_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50/70 border-y border-pink-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-xs font-semibold text-pink-800">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Comprehensive Treatment Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Crafted For Your Natural Beauty &amp; Confidence
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every service is conducted with meticulous hygiene, premium products, and a personal consultation
            so you leave our salon feeling revitalised and radiantly yourself.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-md shadow-pink-500/20 scale-105"
                    : "bg-white text-slate-700 hover:text-pink-700 hover:bg-pink-50/60 border border-slate-200/80 shadow-2xs"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-pink-600"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-pink-100/70 shadow-xs soft-card-shadow soft-card-hover flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Header Tag and Price */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-pink-50 text-pink-700 border border-pink-100">
                    <Tag className="w-3 h-3 text-pink-600" />
                    {service.tag}
                  </span>
                  {service.startingPrice && (
                    <span className="text-xs font-semibold text-slate-900 bg-purple-50 text-purple-800 px-2.5 py-1 rounded-lg">
                      {service.startingPrice}
                    </span>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-pink-700 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                {service.duration && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-pink-500" />
                    <span>{service.duration}</span>
                  </div>
                )}
                <a
                  href={`#booking?service=${encodeURIComponent(service.name)}`}
                  className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-pink-700 hover:text-purple-700 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Book Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
