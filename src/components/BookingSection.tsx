"use client";

import { useState } from "react";
import { Calendar, Clock, Phone, Sparkles, CheckCircle2, Send, MessageCircle } from "lucide-react";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Signature Bridal Make-Up & Hair",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
    notes: "",
  });

  const servicesList = [
    "Signature Bridal Make-Up & Hair",
    "Party & Occasion Make-Up",
    "Intricate Bridal Henna (Mehndi)",
    "Festive & Guest Henna",
    "Couture Haircuts & Blow-Dry",
    "Luxury Color, Highlights & Balayage",
    "Hair Spa & Deep Rejuvenation Treatment",
    "Precision Eyebrow Threading & Shaping",
    "Eyebrow Tinting & Brow Lamination",
    "Gentle Body & Facial Hair Removal (Waxing)",
    "PRP Hair Regrowth & Scalp Therapy",
    "PRP Skin Rejuvenation (Vampire Facial)",
    "Skin Rejuvenation & Advanced Aesthetics",
    "General Beauty Consultation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-pink-50 via-purple-50/60 to-white rounded-3xl border border-pink-200/80 p-8 sm:p-12 lg:p-16 shadow-xl soft-card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Direct Consultation Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-xs font-semibold text-pink-800">
                <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                <span>Begin Your Beauty Journey</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Reserve Your Appointment or Free Consultation
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you’re planning your dream bridal look, scheduling your organic henna session,
                or exploring PRP aesthetic rejuvenation, our welcoming team is ready to care for you.
              </p>

              {/* Direct Quick Booking Pills */}
              <div className="pt-2 space-y-3">
                <a
                  href="https://wa.me/?text=Hello%20Fami%20Salon,%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 transition-colors text-emerald-900 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-900">Instant WhatsApp Booking</p>
                    <p className="text-[11px] text-emerald-700">Quick answers for bridal &amp; salon queries</p>
                  </div>
                </a>

                <a
                  href="tel:+447000000000"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-pink-50 border border-pink-200 hover:bg-pink-100/70 transition-colors text-pink-900 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-pink-900">Speak Directly With Our Stylist</p>
                    <p className="text-[11px] text-pink-700">Call during opening hours</p>
                  </div>
                </a>
              </div>

              {/* Trust Reminders */}
              <div className="pt-4 border-t border-pink-200/60 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Free consultation before advanced aesthetic / PRP treatments</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>Personalised bridal trials tailored to your wedding wardrobe</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Appointment Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our team will contact you shortly via{" "}
                    <strong className="text-pink-700">{formData.phone}</strong> to confirm your slot for{" "}
                    <span className="font-semibold text-slate-900">{formData.service}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 transition-colors cursor-pointer"
                  >
                    <span>Submit another booking</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="e.g. +44 7123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900 bg-white"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="date" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-800 mb-1.5">
                        Preferred Time of Day *
                      </label>
                      <select
                        id="timeSlot"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900 bg-white"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-slate-800 mb-1.5">
                      Notes, Wedding Date or Specific Skin/Hair Concerns
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Share any special requirements, inspiration, wedding details, or questions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-pink-500 transition-all text-slate-900"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 hover:opacity-95 shadow-md shadow-pink-500/20 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm &amp; Request Appointment</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    We value your privacy. We never share your contact information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
