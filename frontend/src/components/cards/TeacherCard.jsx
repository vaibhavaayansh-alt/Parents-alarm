import { Mail, Phone, BookOpen, Users } from 'lucide-react';
import Badge from '../ui/Badge';

export default function TeacherCard({ teacher }) {
  return (
    <div className="card p-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-semibold text-lg shrink-0">
          {teacher.avatar}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900 dark:text-white truncate">{teacher.name}</h3>
          <p className="text-sm text-navy-700 dark:text-navy-300 font-medium">{teacher.designation}</p>
          <p className="text-xs text-slate-500 mt-0.5">ID: {teacher.id}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate">{teacher.subjects.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Users className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate">Class Teacher: {teacher.classTeacherOf}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Phone className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate">{teacher.mobile}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <Mail className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="truncate">{teacher.email}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
        {teacher.classes.map((c) => <Badge key={c} tone="neutral">Class {c}</Badge>)}
      </div>
    </div>
  );
}
