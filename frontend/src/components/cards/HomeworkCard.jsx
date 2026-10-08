import { Calendar, Clock, User } from 'lucide-react';
import Badge from '../ui/Badge';

const statusTone = { Pending: 'warning', Submitted: 'info', Completed: 'success', Overdue: 'danger' };

export default function HomeworkCard({ hw, onView }) {
  return (
    <div className="card p-5 hover:shadow-card-hover transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Badge tone="info">{hw.subject}</Badge>
          <h3 className="font-semibold text-slate-900 dark:text-white mt-2 leading-snug">{hw.title}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">{hw.description}</p>
        </div>
        <Badge tone={statusTone[hw.status]}>{hw.status}</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />Assigned: {hw.assignedDate}</span>
        <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Due: {hw.dueDate}</span>
        <span className="inline-flex items-center gap-1"><User className="w-3.5 h-3.5" />{hw.teacher}</span>
      </div>
      {onView && (
        <button onClick={() => onView(hw)} className="mt-4 text-sm font-medium text-navy-700 dark:text-navy-300 hover:underline">
          View details →
        </button>
      )}
    </div>
  );
}
