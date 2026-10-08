import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';
import { Calendar, Clock, MapPin, ClipboardList } from 'lucide-react';

export default function Exams() {
  const { data, loading } = useApi(() => api.getExams());
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Examinations</h1>
        <p className="text-sm text-slate-500 mt-1">Upcoming exams and schedules</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {data.map((e) => (
          <div key={e.id} className="card p-5 hover:shadow-card-hover transition">
            <div className="flex items-start justify-between">
              <div>
                <Badge tone="purple">{e.name}</Badge>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mt-3">{e.subject}</h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <ClipboardList className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" />{e.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" />{e.startTime} · {e.duration}</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" />{e.room}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
