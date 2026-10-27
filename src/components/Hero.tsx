import Image from "next/image";
import { Sparkles, Calendar, ArrowRight, Star, Heart, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const serviceBadges = [
    "Hair Styling & Cuts",
    "Bespoke Bridal Make-Up",
    "Expert Henna Artistry",
    "Eyebrow Precision Shaping",
    "Silky Hair Removal",
    "Skin Rejuvenation",
    "Advanced Aesthetics",
    "PRP Hair & Skin Treatments",
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-pink-50/70 via-purple-50/40 to-white">
      {/* Background soft ambient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 left-10 w-96 h-96 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200/60 text-xs sm:text-sm font-semibold text-pink-800 shadow-xs">
              <Sparkles className="w-4 h-4 text-pink-600 animate-pulse" />
              <span>Enhancing Your Beauty, Inspiring Your Confidence</span>
            </div>

            {/* Main H1 - High Intent SEO Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Welcome to{" "}
              <span className="salon-text-gradient font-black">
                Fami Hair &amp; Beauty Salon
              </span>
            </h1>

            {/* Subhead with Core Offerings */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Step into a warm, comfortable haven where beauty meets bespoke artistry.
              From <strong className="text-slate-900 font-semibold">expert hair care and stunning bridal make-up</strong> to{" "}
              <strong className="text-slate-900 font-semibold">intricate henna, precision eyebrow shaping</strong>, and{" "}
              <strong className="text-slate-900 font-semibold">advanced aesthetic &amp; PRP treatments</strong>, every experience
              is tailored to your unique radiance.
            </p>

            {/* Keyword Feature Tags */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {serviceBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white text-slate-700 border border-pink-100 shadow-xs hover:border-pink-300 hover:text-pink-700 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-600" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 hover:opacity-95 shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/35 active:scale-95 text-center cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-slate-800 bg-white hover:bg-pink-50/60 border border-slate-200 hover:border-pink-300 shadow-xs transition-all text-center group cursor-pointer"
              >
                <span>View Treatment Menu</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">4.9 / 5 Rating</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Satisfied Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">100% Personalised</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Care &amp; Attention</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-none">Certified Care</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Aesthetic &amp; PRP Standard</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Card Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 via-purple-400/20 to-pink-300/10 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            <div className="relative w-full max-w-md bg-white/90 backdrop-blur-xl border border-pink-100 rounded-3xl p-6 sm:p-8 shadow-2xl soft-card-shadow space-y-6">
              {/* Salon Logo Highlight */}
              <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-600 to-pink-400 shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/fami-logo.jpg"
                    alt="Fami Hair & Beauty Salon Emblem"
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Tagline Card */}
              <div className="text-center space-y-2">
                <h2 className="font-serif text-2xl font-bold text-slate-900">
                  Fami Hair &amp; Beauty Salon
                </h2>
                <p className="text-xs uppercase tracking-widest font-semibold text-pink-600">
                  Enhancing Your Beauty, Inspiring Your Confidence
                </p>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">
                  Relaxing, warm, and professional environment dedicated to your aesthetic journey.
                </p>
              </div>

              {/* Quick Highlight Feature Box */}
              <div className="bg-gradient-to-br from-pink-50/80 via-white to-purple-50/80 rounded-2xl p-4 border border-pink-100/70 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                  <span>Specialist Areas</span>
                  <span className="text-pink-600">All In One Salon</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <span>Bridal Glam &amp; Hair</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Henna Artistry</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                    <span>PRP Hair &amp; Facials</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span>Brows &amp; Waxing</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking Reminder */}
              <a
                href="#booking"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm transition-colors shadow-sm"
              >
                <span>Reserve Your Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
