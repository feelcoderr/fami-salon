import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hair Styling & Cuts",
    description:
      "From precision haircuts and blowouts to stunning colour, balayage, and deep conditioning treatments.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=400&fit=crop",
  },
  {
    title: "Bridal Make-Up",
    description:
      "Flawless, long-lasting bridal make-up and hair styling to make your special day unforgettable.",
    image:
      "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&h=400&fit=crop",
  },
  {
    title: "Henna Artistry",
    description:
      "Intricate, hand-crafted henna designs using 100% organic mehndi for weddings and occasions.",
    image:
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&h=400&fit=crop",
  },
  {
    title: "Eyebrow Services",
    description:
      "Precision eyebrow threading, shaping, tinting, and brow lamination for perfectly defined brows.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop",
  },
  {
    title: "Hair Removal",
    description:
      "Gentle and effective waxing for face and body using premium hypoallergenic products.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  },
  {
    title: "Aesthetics & PRP",
    description:
      "Advanced skin rejuvenation, PRP hair therapy, and vampire facial treatments for natural radiance.",
    image:
      "https://images.unsplash.com/photo-1629397685944-7073b8002da5?w=600&h=400&fit=crop",
  },
];

export default function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted">
            From hair care to advanced aesthetics, every treatment is tailored
            to bring out your natural beauty.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
