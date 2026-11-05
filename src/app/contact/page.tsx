"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { serviceCategories } from "@/data/services";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    timePreference: "morning",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <PageHero
          title="Contact & Booking Enquiry"
          subtitle="Get in touch with our salon reception to book appointments, ask about treatments, or arrange a complimentary consultation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact & Booking" },
          ]}
        />

        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column (5 cols): Contact Information Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60] uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Salon Reception</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a237e] tracking-tight">
                    We&apos;d Love To Welcome You
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Walk-ins are accommodated where possible, but booking in advance is strongly recommended to secure your preferred date and therapist.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f2fa] text-[#1a237e] flex items-center justify-center shrink-0 border border-[#c5cae9]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Salon Studio Location</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        Fami Hair &amp; Beauty Salon<br />
                        79 Belgrave Rd, Ilford IG1 3AL, UK
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f2fa] text-[#1a237e] flex items-center justify-center shrink-0 border border-[#c5cae9]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Phone Appointments</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Direct line for bookings &amp; enquiries</p>
                      <a
                        href="tel:+447788638004"
                        className="text-xs sm:text-sm font-bold text-[#1a237e] hover:text-[#d81b60] transition-colors mt-1 inline-block"
                      >
                        +44 7788 638004
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f2fa] text-[#1a237e] flex items-center justify-center shrink-0 border border-[#c5cae9]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Email Inquiries</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Bridal trials &amp; aesthetic consultations</p>
                      <a
                        href="mailto:info@famihairandbeautysalon.co.uk"
                        className="text-xs sm:text-sm font-bold text-[#1a237e] hover:text-[#d81b60] transition-colors mt-1 inline-block break-all"
                      >
                        info@famihairandbeautysalon.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f2fa] text-[#1a237e] flex items-center justify-center shrink-0 border border-[#c5cae9]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Opening Hours</h4>
                      <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                        <p><strong className="text-slate-800">Monday – Saturday:</strong> 10:00 AM – 7:00 PM</p>
                        <p><strong className="text-[#d81b60] font-semibold">Sunday:</strong> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assurance */}
                <div className="p-4 rounded-xl bg-[#f0f2fa] border border-[#c5cae9] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1a237e] shrink-0" />
                  <p className="text-xs text-slate-700 leading-snug">
                    Complimentary patch tests available 24–48 hours prior for hair colour, tinting, and laser therapies.
                  </p>
                </div>
              </div>

              {/* Right Column (7 cols): Interactive Booking Form */}
              <div className="lg:col-span-7 bg-[#f8f9fc] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#1a237e]">
                      Thank You, {formData.name || "Client"}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      We have received your appointment request. Our salon reception will contact you shortly via phone or email to confirm your booking slot.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            service: "",
                            date: "",
                            timePreference: "morning",
                            notes: "",
                          });
                        }}
                        className="px-6 py-2.5 bg-[#1a237e] hover:bg-[#121858] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        Submit Another Booking
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a237e]">
                        Request An Appointment
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Fill in your details below and we&apos;ll confirm your booking promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07123 456789"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Select Desired Service *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                      >
                        <option value="">— Choose a treatment category —</option>
                        {serviceCategories.map((c) => (
                          <option key={c.slug} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                          Time of Day
                        </label>
                        <select
                          value={formData.timePreference}
                          onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                        >
                          <option value="morning">Morning (9:30 AM – 12:30 PM)</option>
                          <option value="afternoon">Afternoon (12:30 PM – 4:00 PM)</option>
                          <option value="evening">Late Afternoon / Evening (4:00 PM – 6:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Notes &amp; Specific Treatment Requests
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Mention any specific styling preferences, hair length, skin concerns, or multiple treatment combinations..."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-[#1a237e] focus:ring-1 focus:ring-[#1a237e]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#d81b60] hover:bg-[#ad1457] text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
