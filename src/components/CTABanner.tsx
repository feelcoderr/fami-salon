import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1521590832167-7228f4bbc82c?w=1400&h=600&fit=crop"
        alt="Salon styling in progress"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-blue-900/75" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Look & Feel Your Best?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Whether it&apos;s a fresh hairstyle, bridal glam, or a rejuvenating
          treatment — we&apos;re here for you.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-sm cursor-pointer"
          >
            Book Your Appointment
          </a>
          <a
            href="tel:+447000000000"
            className="inline-flex items-center px-8 py-3 bg-white text-foreground font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm cursor-pointer"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
