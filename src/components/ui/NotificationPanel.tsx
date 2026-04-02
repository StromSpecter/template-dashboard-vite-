export interface Notification {
  title: string;
  detail: string;
  time: string;
}

interface NotificationPanelProps {
  open: boolean;
  notifications: Notification[];
}

export function NotificationPanel({
  open,
  notifications,
}: NotificationPanelProps) {
  if (!open) return null;

  return (
    <div
      className="fixed left-24 right-4 top-24 z-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:absolute md:left-auto md:right-16 md:top-[calc(100%+12px)] md:w-80"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Notifications</p>
          <p className="text-xs text-slate-500">
            Aktivitas terbaru untuk akun Anda
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 text-center">
          {notifications.length} baru
        </span>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((item) => (
          <div
            key={item.title}
            className="border-b border-slate-100 px-4 py-3 last:border-b-0"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
              <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
            </div>
            <p className="mt-2 text-xs text-slate-400">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
