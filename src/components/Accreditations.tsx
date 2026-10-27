import Image from "next/image";

const accreditations = [
  {
    name: "VTCT Approved",
    src: "/images/accreditation-vtct.jpg",
    alt: "VTCT Approved Centre",
    width: 140,
    height: 80,
  },
  {
    name: "iTEC Approved",
    src: "/images/accreditation-itec.png",
    alt: "iTEC Approved Centre",
    width: 140,
    height: 80,
  },
  {
    name: "Guild Accredited Training",
    src: "/images/accreditation-guild.png",
    alt: "Guild Accredited Training Centre",
    width: 110,
    height: 80,
  },
  {
    name: "ABT Accredited",
    src: "/images/accreditation-abt.png",
    alt: "ABT Accredited Salon",
    width: 140,
    height: 80,
  },
  {
    name: "Qualifi Approved Centre",
    src: "/images/accreditation-qualifi.jpg",
    alt: "Qualifi Approved Centre",
    width: 160,
    height: 80,
  },
];

export default function Accreditations() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a237e] tracking-tight">
            Our Accreditation
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-medium">
            Nationally &amp; Internationally Recognised Qualifications &amp; Industry Standards
          </p>
        </div>

        {/* Accreditation Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {accreditations.map((item) => (
            <div
              key={item.name}
              className="w-full max-w-[190px] h-24 sm:h-28 flex items-center justify-center p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1a237e]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                  className="object-contain p-1 filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
