import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const catTone = { Academic: 'info', Sports: 'purple', Cultural: 'warning', Competition: 'purple', Holiday: 'success', 'School Event': 'info' };

export default function Events() {
  const { data, loading } = useApi(() => api.getEvents());
  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">School Events</h1>
        <p className="text-sm text-slate-500 mt-1">Upcoming activities and celebrations</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((e) => (
          <div key={e.id} className="card p-5 hover:shadow-card-hover transition-all">
            <div className="flex items-center justify-between mb-3">
              <Badge tone={catTone[e.category] || 'neutral'}>{e.category}</Badge>
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white">{e.name}</h3>
            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{e.description}</p>
            <div className="mt-4 space-y-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{e.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{e.time}</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{e.venue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
