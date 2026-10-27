import Image from "next/image";

export default function Introduction() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=1000&fit=crop"
                alt="Fami salon interior showing a welcoming beauty environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-heading font-bold">10+</p>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-semibold text-pink-500 uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
              Welcome to Fami Hair & Beauty Salon
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                At Fami Hair & Beauty Salon, we believe that beauty is more than
                just appearance — it&apos;s about confidence, self-care, and
                feeling your very best.
              </p>
              <p>
                We are passionate about providing professional hair, beauty,
                make-up, bridal make-up, henna artistry, eyebrow services, hair
                removal, rejuvenation, advanced aesthetic, and PRP treatments in
                a welcoming, relaxing, and comfortable environment.
              </p>
              <p>
                Our aim is to help every client look and feel confident through
                personalised treatments tailored to their individual needs,
                preferences, and beauty goals.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                View Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
