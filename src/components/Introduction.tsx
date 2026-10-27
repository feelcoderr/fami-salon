import Image from "next/image";
import { CheckCircle2, Heart, Sparkles, Award } from "lucide-react";

export default function Introduction() {
  const highlightedTreatments = [
    "Hair Styling & Expert Care",
    "Professional & Bridal Make-Up",
    "Expert Henna Artistry",
    "Eyebrow Shaping & Styling",
    "Smooth Hair Removal",
    "Skin Rejuvenation Facials",
    "Advanced Aesthetic Services",
    "PRP Hair & Skin Treatments",
  ];

  return (
    <section id="about" className="section-padding bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Main Salon Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&h=1250&fit=crop"
                alt="Fami Hair & Beauty Salon interior welcoming environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Experience Box — Solid #1a237e */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1a237e] text-white p-6 rounded-xl shadow-lg border border-white/20 max-w-[220px]">
              <Award className="w-8 h-8 text-pink-400 mb-2" />
              <p className="font-heading text-2xl font-bold leading-none">Personalised</p>
              <p className="text-xs text-slate-200 mt-1">
                Treatments tailored to your unique beauty goals
              </p>
            </div>
          </div>

          {/* Right Column: Full Official About Us Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Fami Hair &amp; Beauty Salon</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] leading-tight">
              Welcome to Fami Hair &amp; Beauty Salon
            </h2>

            {/* Exact Client Paragraphs */}
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p className="font-medium text-slate-900 text-base sm:text-lg">
                At <span className="text-[#1a237e] font-bold">Fami Hair &amp; Beauty Salon</span>, we believe that beauty is more than just appearance — it’s about confidence, self-care, and feeling your very best.
              </p>

              <p>
                We are passionate about providing professional <strong className="text-slate-900 font-semibold">hair, beauty, make-up, bridal make-up, henna artistry, eyebrow services, hair removal, rejuvenation, advanced aesthetic, and PRP treatments</strong> in a welcoming, relaxing, and comfortable environment. Our aim is to help every client look and feel confident through personalised treatments tailored to their individual needs, preferences, and beauty goals.
              </p>

              <p>
                From beautiful hairstyles and expert hair care to <strong className="text-slate-900 font-semibold">professional make-up and stunning bridal make-up</strong>, our talented team is dedicated to helping you look and feel your best on every occasion, especially your special day. We also offer <strong className="text-slate-900 font-semibold">expert henna artistry, professional eyebrow shaping and styling, hair removal, rejuvenation treatments, advanced aesthetic services, and PRP treatments</strong> to enhance your natural beauty.
              </p>

              <div className="p-4 rounded-xl bg-[#f0f2fa] border-l-4 border-[#1a237e] text-slate-800">
                <p className="italic">
                  &ldquo;We believe every client deserves to feel valued, listened to, and cared for. That’s why we focus on attention to detail, a personal approach, and creating an experience that leaves you feeling refreshed, confident, and radiant.&rdquo;
                </p>
              </div>

              <p>
                At Fami Hair &amp; Beauty Salon, your beauty journey is important to us. Whether you’re visiting for a fresh new hairstyle, bridal make-up for your special day, beautiful occasion make-up, intricate henna designs, perfectly shaped eyebrows, smooth skin through hair removal, or rejuvenating aesthetic treatments, we look forward to welcoming you.
              </p>
            </div>

            {/* Treatment Pills */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Our Core Services &amp; Specialties
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlightedTreatments.map((treatment) => (
                  <div key={treatment} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#d81b60] shrink-0" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons — Solid colors */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a237e] hover:bg-[#121858] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Schedule Consultation</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fdf2f6] hover:bg-[#fce4ec] text-[#d81b60] text-sm font-semibold rounded-lg border border-[#f8bbd0] transition-colors cursor-pointer"
              >
                <span>Explore Full Menu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
