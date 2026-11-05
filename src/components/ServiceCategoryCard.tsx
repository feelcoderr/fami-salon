import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Scissors, Sparkles, Hand, Flame, Eye, Heart, Zap, Activity, Droplets, Flower2 } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors, Sparkles, Hand, Flame, Eye, Heart, Zap, Activity, Droplets, Flower2,
};

interface ServiceCategoryCardProps {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
}

export default function ServiceCategoryCard({
  slug,
  title,
  description,
  icon,
  image,
}: ServiceCategoryCardProps) {
  const Icon = iconMap[icon] || Sparkles;

  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-[#1a237e]/40 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Icon badge */}
        <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center border border-slate-200">
          <Icon className="w-5 h-5 text-[#1a237e]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="font-heading text-base sm:text-lg font-bold text-[#1a237e] leading-snug group-hover:text-[#121858] transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#d81b60]">
          <span>View Prices</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
