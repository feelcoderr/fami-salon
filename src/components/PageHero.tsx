import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-[#f0f2fa] border-b border-[#c5cae9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
        <h1
          style={{ color: "#1a237e" }}
          className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold !text-[#1a237e] tracking-tight mt-4 leading-tight"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
