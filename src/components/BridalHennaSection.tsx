import { Sparkles, Heart, Flower2, CheckCircle2, Calendar, Phone } from "lucide-react";

export default function BridalHennaSection() {
  const bridalFeatures = [
    "Comprehensive pre-wedding consultation & trial session",
    "Airbrush / HD camera-proof makeup longevity (16+ hours)",
    "Dupatta, veil, and bridal jewelry setting with precision pinning",
    "Flawless match for diverse skin tones and wedding themes",
  ];

  const hennaFeatures = [
    "Freshly mixed 100% organic henna free of harmful chemicals",
    "Guaranteed deep, dark mahogany stain development",
    "Customized bridal motifs: initials, story elements, and delicate lace",
    "Available for bridal parties, sangeet, Eid, and festive events",
  ];

  return (
    <section id="bridal-henna" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-xs font-semibold text-pink-800">
            <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-500" />
            <span>Special Occasions &amp; Wedding Elegance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Bridal Make-Up &amp; Henna Artistry
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your special day deserves extraordinary craftsmanship. From regal bridal looks that radiate timeless grace
            to intricate henna designs that tell your love story.
          </p>
        </div>

        {/* 2 Featured Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Card 1: Bridal Make-up */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-pink-50/80 via-white to-pink-100/30 border border-pink-200/80 shadow-lg soft-card-shadow flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center shadow-md shadow-pink-500/30">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-pink-700">
                  Signature Wedding Glam
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Bespoke Bridal Make-Up &amp; Hair
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                We believe every bride deserves to feel completely serene and breathtaking.
                Our bridal specialists formulate tailored color harmonies, sweat-resistant hydration layers,
                and sculptured hair styling to complement your bridal attire seamlessly.
              </p>

              <div className="space-y-3 pt-2">
                {bridalFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-pink-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Bridal Packages</p>
                <p className="text-base font-bold text-slate-900">Personalized Quote &amp; Consultation</p>
              </div>
              <a
                href="#booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-pink-600 hover:bg-pink-700 shadow-md transition-all text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Bridal Consultation</span>
              </a>
            </div>
          </div>

          {/* Card 2: Henna Artistry */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-purple-50/80 via-white to-purple-100/30 border border-purple-200/80 shadow-lg soft-card-shadow flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center shadow-md shadow-purple-600/30">
                <Flower2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
                  Organic &amp; Intricate Mehndi
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Master Henna Artistry
                </h3>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Elevating the timeless tradition of henna with artistic modern refinement.
                Whether you envision dense traditional Indian motifs, airy Arabic floral chains,
                or minimalist Moroccan geometries, each line is drawn with steady hands and organic natural cones.
              </p>

              <div className="space-y-3 pt-2">
                {hennaFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-purple-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Bridal &amp; Occasion Henna</p>
                <p className="text-base font-bold text-slate-900">Custom Designs by Request</p>
              </div>
              <a
                href="https://wa.me/?text=Hello%20Fami%20Salon,%20I%20would%20like%20to%20enquire%20about%20Henna%20Artistry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 shadow-md transition-all text-center cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
