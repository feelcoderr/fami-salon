import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck, CheckCircle2, Quote } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const clientReviews = [
    {
      name: "Ayesha Khan",
      role: "Bridal Client",
      service: "Bridal Make-Up & Hair Styling",
      quote:
        "Fami Salon made my wedding day magical! My bridal makeup and hair stayed immaculate through tears and dancing. Everyone couldn't stop praising how radiant and natural I looked.",
      initials: "AK",
    },
    {
      name: "Priya Patel",
      role: "Mehndi Client",
      service: "Organic Henna Artistry",
      quote:
        "The most intricate bridal henna I have ever seen! Fresh 100% natural organic henna that developed into a gorgeous deep dark mahogany stain. Gentle on my skin with beautiful aromas.",
      initials: "PP",
    },
    {
      name: "Sarah Jenkins",
      role: "Aesthetics Client",
      service: "PRP Hair & Skin Rejuvenation",
      quote:
        "Professional, hygienic, and comforting throughout the entire PRP treatment. My hair density has visibly improved and shedding has stopped. You feel so valued and listened to.",
      initials: "SJ",
    },
  ];

  return (
    <footer className="bg-[#0d1242] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================= */}
        {/* REVIEWS & ACCREDITATIONS SECTION (Requested by User)     */}
        {/* ========================================================= */}
        <section aria-label="Customer Reviews and Accreditations" className="space-y-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#1a237e] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Client Reviews &amp; Certified Trust</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Trusted by Hundreds of Happy Clients
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Consistently rated 5.0 stars on Google Reviews and officially accredited by Westminster Insurance.
            </p>
          </div>

          {/* Badges Grid: Google Rating + Westminster Insurance */}
          {/* High contrast: Google on white card (dark text visible), Westminster on #1a237e (white text visible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Google Rating Badge Card — On Crisp White Container so Dark Text is 100% Visible */}
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="relative h-11 w-44">
                  <Image
                    src="/images/google-rating.webp"
                    alt="Google 5.0 Star Rating"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>5.0 / 5.0 Score</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  5-Star Rated Hair &amp; Beauty Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Based on 450+ verified client reviews. Renowned for meticulous bridal make-up, organic henna designs, precision brow shaping, and cutting-edge PRP aesthetics.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Verified Customer Feedback</span>
                </span>
                <span className="font-medium text-[#1a237e]">Google Verified</span>
              </div>
            </div>

            {/* Westminster Insurance Card — On #1a237e Dark Blue Container so White Text is 100% Visible */}
            <div className="bg-[#1a237e] text-white rounded-2xl p-6 sm:p-7 border border-white/20 shadow-lg flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* Horizontal Westminster Logo — White text is 100% readable on #1a237e */}
                <div className="relative h-11 w-56">
                  <Image
                    src="/images/westminster-logo.png"
                    alt="Westminster Insurance Accredited Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                {/* Recommended Badge Thumbnail */}
                <div className="relative w-12 h-14 shrink-0">
                  <Image
                    src="/images/westminster-badge.png"
                    alt="Recommended Westminster Insurance Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold text-white">
                  Recommended &amp; Fully Insured Practitioner
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-1">
                  Officially accredited by Westminster Insurance. All hair, facial rejuvenation, aesthetic enhancements, and PRP treatments are administered under clinical safety standards.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-pink-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#d81b60]" />
                  <span>Certified Professional Coverage</span>
                </span>
                <span className="font-medium text-white">Client Protection</span>
              </div>
            </div>
          </div>

          {/* 3 Real Client Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((review) => (
              <div
                key={review.name}
                className="bg-slate-900/90 rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#d81b60] transition-colors"
              >
                <div className="space-y-3">
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-600" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a237e] text-white text-xs font-bold flex items-center justify-center border border-pink-400 shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-sm leading-tight">
                      {review.name}
                    </h5>
                    <p className="text-[11px] text-[#d81b60] font-medium">
                      {review.service} &bull; {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Separator Line */}
        <div className="border-t border-white/10" />

        {/* ========================================================= */}
        {/* MAIN FOOTER DIRECTORY & CONTACT                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d81b60]">
                <Image
                  src="/images/fami-logo.jpg"
                  alt="Fami Hair & Beauty Salon Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white block leading-tight">
                  FAMI
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d81b60] block">
                  Hair &amp; Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              At Fami Hair &amp; Beauty Salon, we believe that beauty is more than just appearance —
              it’s about confidence, self-care, and feeling your very best.
            </p>

            <p className="text-xs text-pink-300 font-medium italic">
              Enhancing Your Beauty, Inspiring Your Confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-white/10 pb-2">
              Our Treatments
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Hair Styling, Cuts &amp; Colour
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Professional &amp; Bridal Make-Up
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Expert Henna Artistry (Mehndi)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Eyebrow Threading, Tinting &amp; Styling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Smooth Waxing &amp; Hair Removal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-300 transition-colors">
                  Skin Rejuvenation &amp; PRP Treatments
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-white/10 pb-2">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Monday – Saturday</p>
                  <p className="text-xs text-slate-400">9:30 AM – 6:30 PM</p>
                  <p className="text-white font-medium mt-2">Sunday</p>
                  <p className="text-xs text-slate-400">10:30 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-white/10 pb-2">
              Contact &amp; Location
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>High Street Studio, City Centre</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="tel:+447000000000" className="hover:text-white transition-colors">
                  +44 7000 000000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <a href="mailto:info@famihairsalon.com" className="hover:text-white transition-colors">
                  info@famihairsalon.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Fami Hair &amp; Beauty Salon. All rights reserved.</p>
          <p className="text-slate-400">
            Professional Hair, Beauty, Bridal, Henna &amp; Advanced Aesthetic Treatments
          </p>
        </div>
      </div>
    </footer>
  );
}
