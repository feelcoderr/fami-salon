import {
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Award,
  Flower2,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Personalised Approach",
    description:
      "Every treatment is individually tailored to your unique beauty goals, facial structure, skin profile, and personal preferences.",
  },
  {
    icon: Award,
    title: "Attention to Detail",
    description:
      "From delicate bridal henna strokes to microscopic PRP precision and bespoke hair cuts, perfection is in every single step.",
  },
  {
    icon: Users,
    title: "Welcoming Sanctuary",
    description:
      "A soothing, comfortable salon where every client is valued, listened to, and leaves feeling refreshed, radiant, and confident.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Practitioners",
    description:
      "Experienced hair stylists, bridal makeup artists, and certified aesthetic therapists practicing strict medical-grade hygiene.",
  },
  {
    icon: Flower2,
    title: "100% Organic Henna & Care",
    description:
      "We strictly use pure, freshly mixed natural henna cones free of chemical dyes or PPD, plus nourishing professional haircare.",
  },
  {
    icon: Sparkles,
    title: "Inspiring Confidence",
    description:
      "Our mission goes beyond external appearance — we celebrate and enhance your natural beauty so you look and feel your very best.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8eaf6] border border-[#c5cae9] text-xs font-bold text-[#1a237e]">
            <Sparkles className="w-3.5 h-3.5 text-[#d81b60]" />
            <span>The Fami Salon Difference</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] tracking-tight">
            Why Choose Fami Hair &amp; Beauty Salon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe every client deserves an exceptional experience rooted in genuine care,
            unrivalled expertise, and lasting results.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#f8f9fc] rounded-2xl p-8 border border-slate-200 hover:border-[#1a237e] hover:bg-white hover:shadow-md transition-all text-left space-y-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a237e] text-white">
                  <Icon className="w-6 h-6 text-pink-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
