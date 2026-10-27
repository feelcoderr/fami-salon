"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, MapPin, Sparkles, Menu, X, Calendar } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Bridal & Henna", href: "#bridal-henna" },
    { label: "Aesthetics & PRP", href: "#aesthetics-prp" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 transition-all">
      {/* Top Bar for High-Conversion & Local Trust */}
      <div className="bg-gradient-to-r from-pink-900 via-fuchsia-950 to-purple-900 text-pink-100 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Personalised Hair, Bridal, Henna &amp; Aesthetic Treatments</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-pink-200">
              <Clock className="w-3.5 h-3.5 text-pink-400" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM | Sun: 10:30 AM - 5:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+447000000000"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-pink-400" />
              <span>Call / WhatsApp Consultation</span>
            </a>
            <span className="hidden sm:inline text-pink-400">|</span>
            <span className="hidden sm:flex items-center gap-1 text-pink-200">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>Welcoming Luxury Studio</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/images/fami-logo.jpg"
              alt="Fami Hair & Beauty Salon Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-pink-700 transition-colors block">
              FAMI
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-pink-600 block -mt-1">
              Hair &amp; Beauty Salon
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-pink-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-600 hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#booking"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 hover:opacity-95 shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/30 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pink-100 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-pink-600 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-700 shadow-md text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:+447000000000"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
