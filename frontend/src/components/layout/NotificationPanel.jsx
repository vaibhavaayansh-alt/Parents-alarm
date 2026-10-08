import { X, BookOpen, Bell, CalendarCheck, ClipboardList, Wallet, FileText, PartyPopper } from 'lucide-react';

const iconMap = {
  homework:   { icon: BookOpen,      tone: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
  notice:     { icon: Bell,          tone: 'bg-navy-50 text-navy-700 dark:bg-navy-500/10 dark:text-navy-300' },
  attendance: { icon: CalendarCheck, tone: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
  exam:       { icon: ClipboardList, tone: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400' },
  fee:        { icon: Wallet,        tone: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' },
  material:   { icon: FileText,      tone: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400' },
  event:      { icon: PartyPopper,   tone: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
};

export default function NotificationPanel({ open, onClose, notifications }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="font-semibold text-slate-900 dark:text-white">Notifications</h2>
            <p className="text-xs text-slate-500">{notifications.filter((n) => n.unread).length} unread</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {notifications.length === 0 && <p className="text-sm text-slate-500 text-center py-12">No notifications</p>}
          {notifications.map((n) => {
            const meta = iconMap[n.type] || iconMap.notice;
            const Icon = meta.icon;
            return (
              <div key={n.id} className={`flex gap-3 p-3 rounded-xl transition ${n.unread ? 'bg-slate-50 dark:bg-slate-800/50' : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${meta.tone}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{n.title}</p>
                    {n.unread && <span className="w-2 h-2 rounded-full bg-navy-600 shrink-0 mt-1.5" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{n.message}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{n.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
