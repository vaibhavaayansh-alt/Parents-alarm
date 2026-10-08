import { Inbox } from 'lucide-react';

export default function EmptyState({ title = 'Nothing here yet', message = 'There is no data to display.', icon: Icon = Inbox, action }) {
  return (
    <div className="card p-10 text-center flex flex-col items-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="text-sm text-slate-500 mt-1 max-w-sm">{message}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
