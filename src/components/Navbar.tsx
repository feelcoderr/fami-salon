"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Top bar */}
      <div className="bg-blue-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <p className="hidden sm:block">
            Mon – Sat: 9:30 AM – 6:30 PM | Sun: 10:30 AM – 5:00 PM
          </p>
          <a
            href="tel:+447000000000"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us: +44 7000 000000</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/images/fami-logo.jpg"
            alt="Fami Hair and Beauty Salon logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-pink-500"
            priority
          />
          <div>
            <span className="font-heading text-xl font-bold text-foreground block leading-tight">
              FAMI
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-pink-600 leading-none">
              Hair & Beauty Salon
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-pink-500 text-white text-sm font-semibold rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground hover:text-blue-600 transition-colors cursor-pointer"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block w-full text-center px-6 py-3 bg-pink-500 text-white text-sm font-semibold rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
