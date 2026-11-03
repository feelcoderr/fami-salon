import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0d1242] text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Logo + Google Rating Badge */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d81b60] shrink-0">
                <Image
                  src="/images/fami-logo.jpg"
                  alt="Fami Hair & Beauty Salon Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span
                  style={{ color: "#ffffff" }}
                  className="font-heading text-xl font-bold !text-white block leading-tight"
                >
                  FAMI
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d81b60] block">
                  Hair &amp; Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              At Fami Hair &amp; Beauty Salon, we believe that beauty is more than just appearance —
              it&apos;s about confidence, self-care, and feeling your very best.
            </p>

            <p className="text-xs text-pink-300 font-medium italic">
              Enhancing Your Beauty, Inspiring Your Confidence.
            </p>

            {/* Google Rating Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md border border-slate-200">
                <div className="relative h-7 w-32 shrink-0">
                  <Image
                    src="/images/google-rating.webp"
                    alt="Google 5.0 Star Rating"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="border-l border-slate-200 pl-3">
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-900 leading-tight">
                    <span>5.0</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                    Verified Google Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              style={{ color: "#ffffff" }}
              className="font-heading text-base font-bold !text-white border-b border-white/20 pb-2"
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-300 transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pink-300 transition-colors cursor-pointer">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Contact &amp; Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              style={{ color: "#ffffff" }}
              className="font-heading text-base font-bold !text-white border-b border-white/20 pb-2"
            >
              Our Treatments
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/hair" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Hair Styling &amp; Colour
                </Link>
              </li>
              <li>
                <Link href="/services/facials" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Facials &amp; Skin Care
                </Link>
              </li>
              <li>
                <Link href="/services/nails" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Nails &amp; Shellac
                </Link>
              </li>
              <li>
                <Link href="/services/massages-makeup" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Massage &amp; Make-Up
                </Link>
              </li>
              <li>
                <Link href="/services/laser-hair-removal" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Laser Hair Removal
                </Link>
              </li>
              <li>
                <Link href="/services/microneedling-prp" className="hover:text-pink-300 transition-colors cursor-pointer">
                  Microneedling &amp; PRP
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              style={{ color: "#ffffff" }}
              className="font-heading text-base font-bold !text-white border-b border-white/20 pb-2"
            >
              Contact &amp; Hours
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
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs">Mon – Sat: 9:30 AM – 6:30 PM</p>
                  <p className="text-pink-300 font-medium text-xs mt-1">Sunday: Closed</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-5 py-2.5 bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>&copy; {currentYear} Fami Hair &amp; Beauty Salon. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Rated 5.0 on Google &bull; Professional Hair, Beauty, Henna &amp; Aesthetics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
