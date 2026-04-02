export interface Information {
  title: string;
  detail: string;
  category: string;
}

interface InformationPanelProps {
  open: boolean;
  items: Information[];
}

export function InformationPanel({ open, items }: InformationPanelProps) {
  if (!open) return null;

  return (
    <div
      className="fixed left-24 right-4 top-24 z-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:absolute md:left-auto md:right-2 md:top-[calc(100%+12px)] md:w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-semibold text-slate-900">Information</p>
        <p className="text-xs text-slate-500">
          Update sistem dan informasi produk
        </p>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-slate-100 px-4 py-3 last:border-b-0"
          >
            <div className="mb-2">
              <span className="rounded-full bg-sky-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-600">
                {item.category}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-900">{item.title}</p>
            <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
