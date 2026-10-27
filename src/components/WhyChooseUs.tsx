import {
  ShieldCheck,
  Heart,
  Sparkles,
  Clock,
  Award,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Personalised Care",
    description:
      "Every treatment is tailored to your individual needs, preferences, and beauty goals.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Safe",
    description:
      "We maintain the highest standards of cleanliness and use premium, skin-friendly products.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description:
      "Our skilled stylists and therapists bring years of expertise across hair, beauty, and aesthetics.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "We use only professional-grade products that nourish and protect your hair and skin.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description:
      "Open 7 days a week with flexible appointment times to suit your schedule.",
  },
  {
    icon: Users,
    title: "Welcoming Environment",
    description:
      "A warm, relaxing salon where every client is valued, listened to, and cared for.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">
            Why Fami Salon
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted">
            We believe every client deserves to feel valued and confident.
            Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center p-8 rounded-xl border border-border hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
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
