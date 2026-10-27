import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500 shadow-md">
                <Image
                  src="/images/fami-logo.jpg"
                  alt="Fami Hair & Beauty Salon Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">
                  FAMI
                </span>
                <span className="text-xs uppercase tracking-widest text-pink-400 block -mt-1 font-semibold">
                  Hair &amp; Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              At Fami Hair &amp; Beauty Salon, we believe that beauty is more than appearance —
              it’s about confidence, self-care, and feeling your very best.
            </p>

            <p className="font-serif italic text-pink-300 text-sm font-medium">
              &ldquo;Enhancing Your Beauty, Inspiring Your Confidence.&rdquo;
            </p>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Our Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Hair Cutting, Styling &amp; Blowouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Highlights, Balayage &amp; Color
                </a>
              </li>
              <li>
                <a href="#bridal-henna" className="hover:text-pink-400 transition-colors">
                  Bespoke Bridal Make-Up &amp; Hair
                </a>
              </li>
              <li>
                <a href="#bridal-henna" className="hover:text-pink-400 transition-colors">
                  Organic Henna Artistry (Mehndi)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Eyebrow Threading &amp; Lamination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-pink-400 transition-colors">
                  Smooth Waxing &amp; Hair Removal
                </a>
              </li>
              <li>
                <a href="#aesthetics-prp" className="hover:text-pink-400 transition-colors">
                  PRP Hair Regrowth Therapy
                </a>
              </li>
              <li>
                <a href="#aesthetics-prp" className="hover:text-pink-400 transition-colors">
                  PRP Skin Rejuvenation (Vampire Facial)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white font-medium">9:30 - 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">9:30 - 18:30</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">10:30 - 17:00</span>
              </li>
              <li className="pt-2 text-[11px] text-pink-400">
                * Bridal &amp; event appointments available outside standard hours by request.
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Visit &amp; Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <a
                href="tel:+447000000000"
                className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>+44 (0) 7000 000000</span>
              </a>
              <a
                href="mailto:contact@famihairsalon.com"
                className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />
                <span>contact@famihairsalon.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Fami Hair &amp; Beauty Salon, High Street Luxury Studio</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-95 shadow-sm transition-all text-center cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Your Visit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & SEO footer note */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Fami Hair &amp; Beauty Salon. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            <span>for timeless elegance &amp; self-care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
