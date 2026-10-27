"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Clock, Calendar } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact & Booking", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top bar — Solid #1a237e */}
      <div className="bg-[#1a237e] text-white text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-pink-300" />
            <span className="hidden sm:inline">
              Mon – Sat: 9:30 AM – 6:30 PM &bull; Sun: 10:30 AM – 5:00 PM
            </span>
            <span className="sm:hidden">Mon – Sun Appointments Available</span>
          </div>
          <a
            href="tel:+447000000000"
            className="flex items-center gap-2 font-medium hover:text-pink-200 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-pink-300" />
            <span>Call: +44 7000 000000</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#d81b60] shrink-0">
            <Image
              src="/images/fami-logo.jpg"
              alt="Fami Hair & Beauty Salon Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-heading text-xl sm:text-2xl font-bold text-[#1a237e] block leading-none">
              FAMI
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#d81b60] block mt-0.5">
              Hair &amp; Beauty Salon
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-[#1a237e] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — Solid Pink #d81b60 */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d81b60] hover:bg-[#ad1457] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-800 hover:text-[#1a237e] transition-colors cursor-pointer"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-lg">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-slate-800 hover:text-[#1a237e] transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#d81b60] hover:bg-[#ad1457] text-white text-sm font-semibold rounded-lg transition-colors text-center cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </div>
      )}
    </header>
  );
}
