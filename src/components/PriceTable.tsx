import type { ServiceTable } from "@/data/services";
import { Clock } from "lucide-react";

interface PriceTableProps {
  table: ServiceTable;
}

export default function PriceTable({ table }: PriceTableProps) {
  const hasDuration = table.items.some((item) => item.duration && item.duration !== "—");

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Table Header */}
      <div className="px-5 py-4 bg-[#f0f2fa] border-b border-[#c5cae9]">
        <h3 className="font-heading text-lg font-bold text-[#1a237e]">{table.title}</h3>
      </div>

      {/* Table Content */}
      <div className="divide-y divide-slate-100">
        {table.items.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="px-5 py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">{item.name}</p>
              {hasDuration && item.duration && item.duration !== "—" && (
                <div className="flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-500">{item.duration}</span>
                </div>
              )}
            </div>
            <span className="text-sm font-bold text-[#1a237e] whitespace-nowrap shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>

      {/* Optional Note */}
      {"note" in table && (table as ServiceTable & { note?: string }).note && (
        <div className="px-5 py-3 bg-[#fdf2f6] border-t border-[#f8bbd0] text-xs text-slate-600 italic">
          {(table as ServiceTable & { note?: string }).note}
        </div>
      )}
    </div>
  );
}
