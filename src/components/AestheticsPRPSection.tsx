import { Syringe, Sparkles, ShieldCheck, Activity, CheckCircle, ArrowRight } from "lucide-react";

export default function AestheticsPRPSection() {
  const prpBenefits = [
    {
      title: "100% Autologous & Natural",
      desc: "Derived directly from your own platelets — virtually zero allergic risk or foreign synthetic compounds.",
    },
    {
      title: "Proven Follicle Stimulation",
      desc: "Concentrated growth factors awaken dormant hair roots to curb thinning and boost density.",
    },
    {
      title: "Intense Collagen Remodeling",
      desc: "Stimulates deep skin fibroblasts to smooth fine lines, improve elasticity, and heal scars.",
    },
    {
      title: "Minimal Downtime",
      desc: "Non-surgical procedure carried out in an immaculate, clinical-grade relaxing setting.",
    },
  ];

  return (
    <section id="aesthetics-prp" className="py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-purple-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-fuchsia-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/80 border border-purple-700/60 text-xs font-semibold text-pink-300">
            <Syringe className="w-3.5 h-3.5 text-pink-400" />
            <span>Advanced Rejuvenation Science</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Advanced Aesthetics &amp; PRP Therapy
          </h2>
          <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Experience the regenerative power of Platelet-Rich Plasma (PRP) alongside medical-grade
            aesthetic rejuvenation to naturally restore vitality to your hair and skin.
          </p>
        </div>

        {/* 2 Focused Pillars: PRP Hair & PRP Facial */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* PRP Hair Restoration */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 shadow-xl space-y-6 flex flex-col justify-between hover:border-pink-500/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Activity className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-400">
                  Targeted Scalp Therapy
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  PRP Hair Regrowth &amp; Thickening
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Ideal for individuals facing early hair thinning, postpartum shedding, or receding lines.
                By injecting concentrated blood platelets rich in bioactive growth factors into target scalp zones,
                follicular metabolism is rejuvenated and cellular regeneration is accelerated.
              </p>

              <div className="space-y-2 pt-2 border-t border-purple-800/40">
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Strengthens weakened hair shafts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Slows active shedding and promotes new follicle cycles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Safe, natural, and completely biocompatible</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-800/40">
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white font-semibold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                <span>Book Hair PRP Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PRP Vampire Facial & Skin Rejuvenation */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-purple-500/20 shadow-xl space-y-6 flex flex-col justify-between hover:border-pink-500/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-pink-400">
                  Collagen Induction
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  PRP Skin Rejuvenation (Vampire Facial)
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                Unlock your skin’s deepest cellular regeneration. Combining precision micro-infusion
                with your own rich plasma platelets, this celebrated treatment diminishes acne scars,
                fine lines, enlarged pores, and sun damage while giving a dewy, youthful elasticity.
              </p>

              <div className="space-y-2 pt-2 border-t border-purple-800/40">
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Diminishes fine lines and dark under-eye hollows</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Improves skin tone, texture, and natural luminosity</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-purple-200">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Accelerates natural tissue remodeling</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-800/40">
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white font-semibold text-xs tracking-wide shadow-md transition-all cursor-pointer"
              >
                <span>Book Skin PRP Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights for Clinical Aesthetics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {prpBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-purple-900/30 border border-purple-800/40 rounded-2xl p-5 space-y-2"
            >
              <ShieldCheck className="w-5 h-5 text-pink-400" />
              <h4 className="font-serif text-sm font-bold text-white">
                {item.title}
              </h4>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
