"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Bridal Make-Up & Hair",
    date: "",
    timeSlot: "Morning (9:30 AM - 1:00 PM)",
    message: "",
  });

  const servicesList = [
    "Hair Styling, Cut & Blowout",
    "Luxury Hair Colour & Balayage",
    "Bridal Make-Up & Hair",
    "Party & Occasion Make-Up",
    "Intricate Henna Artistry (Mehndi)",
    "Eyebrow Threading, Tinting & Lamination",
    "Smooth Hair Removal / Waxing",
    "Skin Rejuvenation Facials",
    "Advanced Aesthetic Treatments",
    "PRP Hair Regrowth Therapy",
    "PRP Skin Rejuvenation (Vampire Facial)",
    "General Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Reservations &amp; Enquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] tracking-tight">
            Book Your Visit or Free Consultation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill in our booking request form or reach out directly. We look forward to welcoming you
            and tailoring an experience just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Instant WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <h3 className="font-heading text-xl font-bold text-[#1a237e]">
                Studio Details
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8eaf6] text-[#1a237e] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Salon Studio Location</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                      Fami Hair &amp; Beauty Salon
                      <br />
                      High Street Luxury Studio, City Centre
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8eaf6] text-[#1a237e] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone Consultation</h4>
                    <a
                      href="tel:+447000000000"
                      className="text-slate-600 hover:text-[#1a237e] font-medium text-xs sm:text-sm mt-0.5 block transition-colors cursor-pointer"
                    >
                      +44 7000 000000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8eaf6] text-[#1a237e] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Address</h4>
                    <a
                      href="mailto:info@famihairsalon.com"
                      className="text-slate-600 hover:text-[#1a237e] font-medium text-xs sm:text-sm mt-0.5 block transition-colors cursor-pointer"
                    >
                      info@famihairsalon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8eaf6] text-[#1a237e] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Opening Hours</h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                      Mon – Sat: 9:30 AM – 6:30 PM
                      <br />
                      Sunday: 10:30 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/?text=Hello%20Fami%20Hair%20%26%20Beauty%20Salon,%20I%20would%20like%20to%20enquire%20about%20booking%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#1a237e] hover:bg-[#121858] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-pink-300" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#e8eaf6] text-[#1a237e]">
                  <CheckCircle2 className="w-8 h-8 text-[#d81b60]" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1a237e]">
                  Booking Enquiry Sent!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team will contact you shortly via{" "}
                  <strong className="text-[#1a237e]">{formData.phone}</strong> to confirm your slot for{" "}
                  <span className="font-semibold text-slate-900">{formData.service}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold text-[#1a237e] bg-[#e8eaf6] hover:bg-[#c5cae9] transition-colors cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-2xl font-bold text-[#1a237e] mb-2">
                  Request an Appointment
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Treatment Interested In *
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    >
                      {servicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all"
                    >
                      <option value="Morning (9:30 AM - 1:00 PM)">Morning (9:30 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                    Special Requests or Bridal Details
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your wedding date, skin/hair preferences, or specific goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:border-[#1a237e] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#d81b60] hover:bg-[#ad1457] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Appointment Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
