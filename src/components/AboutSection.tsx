import { Heart, Sparkles, Smile, ShieldCheck, Flower2, Award } from "lucide-react";

export default function AboutSection() {
  const brandPillars = [
    {
      icon: Heart,
      title: "Personalised Care",
      desc: "Tailored treatments attuned to your unique beauty goals, facial structure, skin tone, and personal preferences.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic & Relaxing",
      desc: "A welcoming, soothing, and immaculate environment where you can unwind completely while in expert hands.",
    },
    {
      icon: Award,
      title: "Attention to Detail",
      desc: "From the finest stroke of henna paste to sterile PRP needlework and precision hair cuts, perfection is in every touch.",
    },
    {
      icon: Sparkles,
      title: "Natural Radiance",
      desc: "Enhancing what makes you uniquely beautiful rather than masking it, leaving you feeling revitalized and confident.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Storytelling Box */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-lg opacity-20 transform -rotate-1" />
              <div className="relative bg-gradient-to-br from-pink-50 via-purple-50/50 to-white border border-pink-100 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-700 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
                  <Flower2 className="w-7 h-7" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-pink-600">
                    Our Philosophy
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    &ldquo;Beauty is more than appearance — it is confidence, self-care &amp; feeling your best.&rdquo;
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe every client deserves to feel valued, listened to, and cared for.
                  That’s why we craft an experience that leaves you feeling refreshed, confident, and radiant.
                </p>

                <div className="pt-4 border-t border-pink-200/60">
                  <p className="font-serif italic text-base text-pink-800 font-semibold">
                    Fami Hair &amp; Beauty Salon
                  </p>
                  <p className="text-xs text-slate-500">
                    Enhancing Your Beauty, Inspiring Your Confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Official About Us Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-semibold text-purple-800">
              <Smile className="w-3.5 h-3.5 text-purple-600" />
              <span>About Fami Hair &amp; Beauty Salon</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              A Warm Sanctuary for Hair, Bridal Elegance &amp; Advanced Aesthetics
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                At <strong className="text-slate-900">Fami Hair &amp; Beauty Salon</strong>, we believe that beauty is more than just appearance — it’s about confidence, self-care, and feeling your very best.
              </p>
              <p>
                We are passionate about providing professional{" "}
                <strong className="text-pink-700">hair, beauty, make-up, bridal make-up, henna artistry, eyebrow services, hair removal, rejuvenation, advanced aesthetic, and PRP treatments</strong>{" "}
                in a welcoming, relaxing, and comfortable environment. Our aim is to help every client look and feel confident through personalised treatments tailored to their individual needs, preferences, and beauty goals.
              </p>
              <p>
                From beautiful hairstyles and expert hair care to professional make-up and stunning bridal make-up, our talented team is dedicated to helping you look and feel your best on every occasion, especially your special day. We also offer expert henna artistry, professional eyebrow shaping and styling, hair removal, rejuvenation treatments, advanced aesthetic services, and PRP treatments to enhance your natural beauty.
              </p>
              <p className="text-slate-900 font-medium bg-pink-50/60 border-l-4 border-pink-500 p-4 rounded-r-xl">
                &ldquo;Whether you’re visiting for a fresh new hairstyle, bridal make-up for your special day, beautiful occasion make-up, intricate henna designs, perfectly shaped eyebrows, smooth skin through hair removal, or rejuvenating aesthetic treatments, we look forward to welcoming you.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
          {brandPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm soft-card-shadow soft-card-hover space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
