import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PriceTable from "@/components/PriceTable";
import CTABanner from "@/components/CTABanner";
import { getServiceBySlug, getAllServiceSlugs, serviceCategories } from "@/data/services";
import { Calendar, Phone, CheckCircle2, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceBySlug(slug);

  if (!category) {
    return {
      title: "Service Not Found | Fami Hair & Beauty Salon",
    };
  }

  return {
    title: `${category.title} Price List & Treatments | Fami Hair & Beauty Salon`,
    description: category.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getServiceBySlug(slug);

  if (!category) {
    notFound();
  }

  // Other related service categories
  const otherCategories = serviceCategories.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHero
          title={category.title}
          subtitle={category.description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: category.shortTitle },
          ]}
        />

        {/* Main Service Content & Pricing */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column (8 cols): Pricing Tables */}
              <div className="lg:col-span-8 space-y-10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Treatment Pricing</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a237e]">
                    {category.title} Price Guide
                  </h2>
                  <p className="text-sm text-slate-600">
                    Transparent, fair pricing across all individual sessions and course packages. Consult with our therapists for personalised treatment combinations.
                  </p>
                </div>

                {/* Render All Tables for This Category */}
                <div className="space-y-8">
                  {category.tables.map((table) => (
                    <PriceTable key={table.title} table={table} />
                  ))}
                </div>

                {/* Hygiene & Consultation Note */}
                <div className="p-5 rounded-2xl bg-[#f0f2fa] border border-[#c5cae9] flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#1a237e] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-slate-900">Professional Salon Standard</p>
                    <p className="leading-relaxed">
                      All treatments are conducted by fully qualified specialists using sterilized medical-grade instruments, hypoallergenic products, and personalized consultation records.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (4 cols): Sidebar Highlights & Quick Booking */}
              <div className="lg:col-span-4 space-y-8">
                {/* Visual Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#0d1242]/40" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300 block">
                      Fami Salon Speciality
                    </span>
                    <h3 className="font-heading text-xl font-bold">{category.shortTitle}</h3>
                  </div>
                </div>

                {/* Quick Booking Box */}
                <div className="p-6 rounded-2xl bg-[#0d1242] text-white shadow-lg space-y-4">
                  <div className="space-y-1">
                    <h4
                      style={{ color: "#ffffff" }}
                      className="font-heading text-lg font-bold !text-white"
                    >
                      Ready To Book?
                    </h4>
                    <p className="text-xs text-slate-300">
                      Reserve your appointment online or call our front desk directly for same-day availability.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#d81b60] hover:bg-[#ad1457] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Online Now</span>
                    </Link>
                    <a
                      href="tel:+447788638004"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-slate-100 text-[#1a237e] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call +44 7788 638004</span>
                    </a>
                  </div>
                </div>

                {/* Other Related Services */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="font-heading text-base font-bold text-[#1a237e] border-b border-slate-200 pb-2">
                    Explore Other Treatments
                  </h4>
                  <ul className="space-y-3">
                    {otherCategories.map((other) => (
                      <li key={other.slug}>
                        <Link
                          href={`/services/${other.slug}`}
                          className="flex items-center justify-between text-xs font-medium text-slate-700 hover:text-[#1a237e] transition-colors group cursor-pointer"
                        >
                          <span>{other.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-[#1a237e] transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-[#d81b60] hover:text-[#ad1457] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View All 10 Categories</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

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
