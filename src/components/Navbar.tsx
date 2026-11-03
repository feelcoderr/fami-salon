"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Clock, Calendar, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Hair Services", href: "/services/hair" },
      { label: "Facials & Skin Care", href: "/services/facials" },
      { label: "Nails", href: "/services/nails" },
      { label: "Threading & Waxing", href: "/services/threading-waxing" },
      { label: "Lashes & Brows", href: "/services/eyelash-extensions" },
      { label: "Massage & Makeup", href: "/services/massages-makeup" },
      { label: "Laser Hair Removal", href: "/services/laser-hair-removal" },
      { label: "Microneedling & PRP", href: "/services/microneedling-prp" },
      { label: "Hydra Facial & BioRepeel", href: "/services/microdermabrasion-hydrafacial" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      {/* Top bar */}
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
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.children ? (
                <>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#1a237e] transition-colors cursor-pointer py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-64 bg-white rounded-xl border border-slate-200 shadow-xl py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-[#f0f2fa] hover:text-[#1a237e] transition-colors cursor-pointer"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#1a237e] transition-colors cursor-pointer py-2"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d81b60] hover:bg-[#ad1457] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
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
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-6 shadow-lg max-h-[70vh] overflow-y-auto">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => setServiceOpen(!serviceOpen)}
                      className="flex items-center justify-between w-full text-base font-medium text-slate-800 hover:text-[#1a237e] transition-colors cursor-pointer py-1"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {serviceOpen && (
                      <ul className="mt-2 ml-4 space-y-2 border-l-2 border-[#e8eaf6] pl-4">
                        <li>
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm font-semibold text-[#1a237e] cursor-pointer py-0.5"
                          >
                            All Services
                          </Link>
                        </li>
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-slate-700 hover:text-[#1a237e] transition-colors cursor-pointer py-0.5"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-slate-800 hover:text-[#1a237e] transition-colors cursor-pointer py-1"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-[#d81b60] hover:bg-[#ad1457] text-white text-sm font-semibold rounded-lg transition-colors text-center cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
        </div>
      )}
    </header>
  );
}
