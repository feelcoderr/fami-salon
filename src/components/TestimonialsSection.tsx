import { Star, Quote, CheckCircle2, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      service: "Bridal Make-Up & Hair Styling",
      rating: 5,
      date: "Wedding Client",
      quote:
        "Fami Salon made my wedding day completely magical. The bridal make-up lasted over 15 hours through tears, photos, and dancing without a single touch-up needed. My hair and jewelry were pinned so comfortably. Everyone couldn’t stop complimenting my look!",
      initials: "AK",
      accent: "from-pink-500 to-rose-600",
    },
    {
      name: "Priya Patel",
      service: "Bridal Henna Artistry",
      rating: 5,
      date: "Mehndi Client",
      quote:
        "The henna work was mind-blowing! Intricate details, customized figures, and the stain became such a deep dark mahogany after 48 hours. Plus, their 100% organic henna smelled wonderful and felt so gentle on my sensitive skin.",
      initials: "PP",
      accent: "from-purple-500 to-indigo-600",
    },
    {
      name: "Sarah Jenkins",
      service: "PRP Hair Regrowth & Aesthetics",
      rating: 5,
      date: "PRP Aesthetic Client",
      quote:
        "After experiencing postpartum hair thinning, I booked a consultation for PRP. Three sessions later, my hair line is visibly thicker and shedding has stopped. The team is warm, hygienic, and makes you feel relaxed throughout the entire procedure.",
      initials: "SJ",
      accent: "from-fuchsia-500 to-purple-600",
    },
    {
      name: "Fatima Zahra",
      service: "Eyebrow Threading & Skin Rejuvenation",
      rating: 5,
      date: "Regular Client",
      quote:
        "I have been coming to Fami Hair & Beauty Salon for my monthly brow threading and facial treatments. The attention to detail is remarkable — they truly listen to how I want my brows shaped and my skin has never glowed like this.",
      initials: "FZ",
      accent: "from-pink-600 to-purple-700",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-pink-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-xs font-semibold text-pink-800">
            <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-500" />
            <span>Client Experiences</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Loved By Brides, Regulars &amp; Aesthetic Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discover why our clients trust us with their most momentous milestones and routine self-care rituals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-pink-100 shadow-sm soft-card-shadow soft-card-hover space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-pink-200" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Meta */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.accent} text-white font-bold text-sm flex items-center justify-center shadow-xs`}>
                  {t.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">
                      {t.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <p className="text-xs text-pink-700 font-medium">
                    {t.service} &bull; <span className="text-slate-500">{t.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
