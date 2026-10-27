import Image from "next/image";
import { Calendar, Phone, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-[#1a237e]">
      {/* Background Image with dark solid overlay */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=700&fit=crop"
        alt="Stylist at work in modern luxury salon"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#1a237e] text-xs font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#d81b60]" />
          <span>Fami Hair &amp; Beauty Salon</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
          Enhancing Your Beauty, Inspiring Your Confidence
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Whether you are visiting for a fresh new hairstyle, bridal make-up for your special day,
          intricate henna designs, perfectly shaped eyebrows, smooth skin, or rejuvenating aesthetic &amp; PRP treatments — we look forward to welcoming you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </a>
          <a
            href="tel:+447000000000"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-100 text-[#1a237e] font-semibold text-sm rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call +44 7000 000000</span>
          </a>
        </div>
      </div>
    </section>
  );
}
