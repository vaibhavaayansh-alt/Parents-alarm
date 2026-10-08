import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';
import { Users } from 'lucide-react';

export default function Classes() {
  const { data, loading } = useApi(() => api.getTeacherClasses());
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">My Classes</h1>
        <p className="text-sm text-slate-500 mt-1">All classes assigned to you</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((c) => (
          <div key={c.id} className="card p-5 hover:shadow-card-hover transition">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-bold shrink-0">
                {c.class}
              </div>
              <Badge tone="info"><Users className="w-3 h-3" />{c.students}</Badge>
            </div>
            <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">Class {c.class} — Section {c.section}</h3>
            <p className="text-sm text-slate-500 mt-0.5">{c.subject}</p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">{c.students} students</span>
              <button className="text-xs font-medium text-navy-700 dark:text-navy-300 hover:underline">View students →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
