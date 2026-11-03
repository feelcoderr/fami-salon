import Link from "next/link";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import { serviceCategories } from "@/data/services";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-[#f8f9fc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fce4ec] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Treatment Directory</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] tracking-tight">
              Our Featured Services &amp; Specialties
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              From signature hair transformations and bridal mehndi to medical-grade Hydra Facials and autologous PRP rejuvenation — explore our specialized beauty offerings.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a237e] hover:bg-[#121858] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>View All 9 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 9 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard
              key={category.slug}
              slug={category.slug}
              title={category.title}
              shortTitle={category.shortTitle}
              description={category.description}
              icon={category.icon}
              image={category.image}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading text-lg font-bold text-[#1a237e]">
              Looking for customized combinations or bridal packages?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              We create personalized packages tailored to your schedule, events, and skin goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#d81b60] hover:bg-[#ad1457] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <span>Consult Our Stylists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
