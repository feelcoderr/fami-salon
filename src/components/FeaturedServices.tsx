import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Hair Styling & Expert Care",
    category: "Hair Artistry",
    description:
      "Precision haircuts, restyling, blowouts, multidimensional colour, balayage, and restorative hair spa therapies.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
  },
  {
    title: "Professional & Bridal Make-Up",
    category: "Make-Up & Glam",
    description:
      "Flawless, photo-ready bridal makeup, engagement glam, party looks, and pre-wedding consultation trials.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
  },
  {
    title: "Expert Henna Artistry",
    category: "Organic Mehndi",
    description:
      "Intricate traditional bridal henna, contemporary Arabic floral designs, and festive patterns using 100% natural cones.",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&h=400&fit=crop",
  },
  {
    title: "Eyebrow Shaping & Styling",
    category: "Brows",
    description:
      "Precision threading, arch shaping, custom brow tinting, and lamination for beautifully framed, symmetrical brows.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop",
  },
  {
    title: "Smooth Hair Removal",
    category: "Silky Waxing",
    description:
      "Gentle and hygienic waxing for body and delicate facial areas using premium hypoallergenic skin-safe products.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  },
  {
    title: "Skin Rejuvenation Facials",
    category: "Skin Care",
    description:
      "Deep cleansing facials, hydration therapies, and glow treatments customized for your skin’s vitality and youthfulness.",
    image:
      "https://images.unsplash.com/photo-1512290900672-1f02e9ad0ba8?w=600&h=400&fit=crop",
  },
  {
    title: "Advanced Aesthetic Services",
    category: "Clinical Aesthetics",
    description:
      "Non-invasive clinical aesthetic therapies designed to target fine lines, hyperpigmentation, and texture refinement.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
  },
  {
    title: "PRP Treatments (Platelet-Rich Plasma)",
    category: "Advanced PRP",
    description:
      "Autologous growth factor therapy for hair thinning & scalp restoration, and PRP vampire facials for intense collagen renewal.",
    image:
      "https://images.unsplash.com/photo-1629397685944-7073b8002da5?w=600&h=400&fit=crop",
  },
];

export default function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-[#f8f9fc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf2f6] border border-[#f8bbd0] text-xs font-bold text-[#d81b60]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Salon &amp; Aesthetic Treatments</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a237e] tracking-tight">
            Our Featured Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From precision styling and bridal elegance to clinical skin and PRP treatments,
            experience personalised care delivered by passionate specialists.
          </p>
        </div>

        {/* 8-Card Grid (2x4 / responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:border-[#1a237e] hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#1a237e] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#1a237e] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0 border-t border-slate-100 mt-3">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d81b60] hover:text-[#ad1457] transition-colors cursor-pointer"
                >
                  <span>Book Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
