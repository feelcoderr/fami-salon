import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCategoryCard from "@/components/ServiceCategoryCard";
import CTABanner from "@/components/CTABanner";
import { serviceCategories } from "@/data/services";
import { Sparkles, Calendar, Phone, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Treatments & Services Menu | Fami Hair & Beauty Salon",
  description:
    "Explore our full service menu: Hair care, Facials, Nails, Threading & Waxing, Eyelashes, Massages, Bridal Make-up, Laser Hair Removal, Microneedling & PRP.",
};

const popularPackages = [
  {
    title: "Bridal Complete Glamour Package",
    category: "Make-Up & Hair",
    price: "From £250.00",
    description: "Bespoke bridal hair styling, camera-proof make-up, luxury lashes, and pre-wedding bridal trial consultation.",
    link: "/services/massages-makeup",
  },
  {
    title: "BioRepeel Face & Neck (4 Sessions)",
    category: "Skin Aesthetics",
    price: "£399.00",
    description: "Multi-session medical-grade bio-stimulating peel to restore skin firmness, erase hyperpigmentation, and regenerate collagen.",
    link: "/services/microdermabrasion-hydrafacial",
  },
  {
    title: "Full Body Laser Hair Removal (6 Sessions)",
    category: "Laser Clinic",
    price: "Custom Package",
    description: "Advanced IPL / SHR painless permanent hair reduction packages with complimentary patch test & skin typing.",
    link: "/services/laser-hair-removal",
  },
  {
    title: "PRP Hair Loss / Vampire Facial (4 Sessions)",
    category: "Regenerative Aesthetics",
    price: "£1,000.00",
    description: "Autologous Platelet-Rich Plasma therapy clinically proven to stimulate dormant hair follicles and restore youthful facial volume.",
    link: "/services/microneedling-prp",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHero
          title="Our Treatments & Services"
          subtitle="Explore our comprehensive price list and specialized treatments across hair, beauty, clinical skincare, and advanced aesthetic therapies."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* Categories Grid Section */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>9 Treatment Categories</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a237e] tracking-tight">
                Browse By Treatment Category
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Select any category to view full treatment durations, pricing tables, multi-session course packages, and booking details.
              </p>
            </div>

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
          </div>
        </section>

        {/* Featured Course Packages */}
        <section className="py-16 sm:py-20 bg-[#f8f9fc] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a237e] tracking-tight">
                Popular Multi-Session Treatment Packages
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Enjoy significant course savings when booking multi-session clinical treatments and bridal combinations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {popularPackages.map((pkg) => (
                <div
                  key={pkg.title}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#1a237e]/40 hover:shadow-md transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-[#d81b60] uppercase tracking-wider">
                        {pkg.category}
                      </span>
                      <span className="px-3 py-1 bg-[#f0f2fa] text-[#1a237e] font-bold text-xs rounded-full border border-[#c5cae9]">
                        {pkg.price}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#1a237e]">{pkg.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pkg.description}</p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={pkg.link}
                      className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-[#1a237e] hover:bg-[#121858] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      View Category &amp; Pricing Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
