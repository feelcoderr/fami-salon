"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How far in advance should I book my bridal make-up and hair?",
      a: "We recommend reserving your wedding date 3 to 6 months in advance, especially during the peak wedding and festive seasons. We also schedule a pre-bridal trial 4–8 weeks prior to finalize your dream look, hairstyle, and jewelry placement.",
    },
    {
      q: "What type of henna (mehndi) do you use, and how dark does it stain?",
      a: "At Fami Hair & Beauty Salon, we strictly use 100% natural and freshly mixed organic henna cones, completely free from chemical dyes, PPD, or synthetic boosters. With our recommended aftercare, it develops into a deep, rich mahogany stain within 24 to 48 hours.",
    },
    {
      q: "How does PRP (Platelet-Rich Plasma) treatment work for hair regrowth?",
      a: "PRP is an autologous treatment where a small amount of your own blood is drawn, spun in a medical centrifuge to separate the platelet-rich plasma, and then gently injected into targeted scalp areas. The concentrated growth factors awaken dormant follicles, slow down thinning, and stimulate new hair density.",
    },
    {
      q: "Are your eyebrow threading and hair removal services suitable for sensitive skin?",
      a: "Yes, absolutely. Our eyebrow threading creates immaculate precision without chemical irritation. For waxing and hair removal, we use hypoallergenic, premium peel waxes formulated specifically to calm delicate facial and body skin.",
    },
    {
      q: "Do I need a consultation before undergoing advanced aesthetic treatments?",
      a: "Yes. Every client receives a personalized assessment of their skin or hair goals, medical history, and expectations before aesthetic or PRP treatments to ensure maximum safety, comfort, and results.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50/60 border-t border-pink-100/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-xs font-semibold text-pink-800">
            <HelpCircle className="w-3.5 h-3.5 text-pink-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our salon services, bridal bookings, henna, and PRP aesthetic therapies.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-pink-100 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180 bg-pink-100 text-pink-700" : "bg-slate-100 text-slate-600"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-pink-50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
