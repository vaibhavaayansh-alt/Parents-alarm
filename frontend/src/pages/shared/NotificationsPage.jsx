import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { Bell, BookOpen, CalendarCheck, ClipboardList, Wallet, FileText, PartyPopper } from 'lucide-react';

const iconMap = {
  homework:   { icon: BookOpen,      tone: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400' },
  notice:     { icon: Bell,          tone: 'bg-navy-50 text-navy-700 dark:bg-navy-500/10 dark:text-navy-300' },
  attendance: { icon: CalendarCheck, tone: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' },
  exam:       { icon: ClipboardList, tone: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400' },
  fee:        { icon: Wallet,        tone: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' },
  material:   { icon: FileText,      tone: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400' },
  event:      { icon: PartyPopper,   tone: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400' },
};

export default function NotificationsPage() {
  const { data, loading } = useApi(() => api.getNotifications());
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Notifications</h1>
        <p className="text-sm text-slate-500 mt-1">{data.filter((n) => n.unread).length} unread</p>
      </div>

      <div className="card divide-y divide-slate-100 dark:divide-slate-800">
        {data.map((n) => {
          const meta = iconMap[n.type] || iconMap.notice;
          const Icon = meta.icon;
          return (
            <div key={n.id} className={`flex gap-3.5 p-4 sm:p-5 ${n.unread ? 'bg-slate-50/60 dark:bg-slate-800/30' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${meta.tone}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-slate-900 dark:text-white">{n.title}</p>
                  {n.unread && <span className="w-2 h-2 rounded-full bg-navy-600 shrink-0 mt-2" />}
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{n.message}</p>
                <p className="text-xs text-slate-400 mt-1.5">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
        }
