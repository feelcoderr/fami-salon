import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/fami-logo.jpg"
                alt="Fami Hair & Beauty Salon Logo"
                width={48}
                height={48}
                className="rounded-full border-2 border-pink-500"
              />
              <div>
                <span className="font-heading text-xl font-bold text-white block leading-tight">
                  FAMI
                </span>
                <span className="text-[11px] font-medium uppercase tracking-widest text-pink-400 block">
                  Hair & Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              At Fami Hair & Beauty Salon, we believe beauty is about confidence, self-care,
              and feeling your very best. Professional hair, beauty, make-up, and aesthetic treatments.
            </p>

            <p className="text-xs text-pink-400 font-medium">
              Enhancing Your Beauty, Inspiring Your Confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Hair Styling & Cuts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Bridal & Occasion Make-Up
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Henna Artistry (Mehndi)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Eyebrow Threading & Tinting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Hair Removal & Waxing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Skin Rejuvenation & PRP Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-slate-800 pb-2">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Mon – Sat</p>
                  <p className="text-xs">9:30 AM – 6:30 PM</p>
                  <p className="text-white font-medium mt-2">Sunday</p>
                  <p className="text-xs">10:30 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-semibold text-white border-b border-slate-800 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>High Street Studio, City Centre</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+447000000000" className="hover:text-white transition-colors">
                  +44 7000 000000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@famihairsalon.com" className="hover:text-white transition-colors">
                  info@famihairsalon.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs rounded-lg transition-colors"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Fami Hair & Beauty Salon. All rights reserved.</p>
          <p className="text-slate-400">
            Professional Hair, Beauty, Henna & Aesthetic Treatments
          </p>
        </div>
      </div>
    </footer>
  );
}
