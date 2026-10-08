import { AlertCircle, Calendar, User } from 'lucide-react';
import Badge from '../ui/Badge';

const categoryTone = {
  General: 'neutral', Academic: 'info', Examination: 'danger', Holiday: 'success',
  Sports: 'purple', Event: 'warning', Competition: 'purple', Important: 'danger',
};

export default function NoticeCard({ notice, onView }) {
  return (
    <div className={`card p-5 hover:shadow-card-hover transition-all duration-300 ${notice.important ? 'border-l-4 border-l-rose-500' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <Badge tone={categoryTone[notice.category] || 'neutral'}>{notice.category}</Badge>
            {notice.important && (
              <Badge tone="danger"><AlertCircle className="w-3 h-3" />Important</Badge>
            )}
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white leading-snug">{notice.title}</h3>
          <p className="text-sm text-slate-500 mt-1.5 line-clamp-2">{notice.description}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 flex-wrap">
            <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{notice.date}</span>
            <span className="inline-flex items-center gap-1"><User className="w-3.5 h-3.5" />{notice.publishedBy}</span>
          </div>
        </div>
      </div>
      {onView && (
        <button onClick={() => onView(notice)} className="mt-4 text-sm font-medium text-navy-700 dark:text-navy-300 hover:underline">
          Read more →
        </button>
      )}
    </div>
  );
}
