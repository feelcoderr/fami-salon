import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-slate-500">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, idx) => (
          <li key={item.label} className="flex items-center gap-1">
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#1a237e] transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#1a237e] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
