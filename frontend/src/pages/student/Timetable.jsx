import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

export default function Timetable() {
  const { data, loading } = useApi(() => api.getTimetable());
  if (loading) return <LoadingSpinner />;

  const { timetable, times } = data;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Timetable</h1>
        <p className="text-sm text-slate-500 mt-1">Weekly class schedule — Monday to Saturday</p>
      </div>

      <div className="hidden md:block card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Day</th>
                {times.map((t, i) => (
                  <th key={i} className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    P{i + 1}<span className="block text-[10px] font-normal text-slate-400">{t}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {timetable.map((row) => (
                <tr key={row.day} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100 whitespace-nowrap">{row.day}</td>
                  {row.periods.map((p, i) => (
                    <td key={i} className="px-4 py-3">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 text-xs font-medium">{p}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        {timetable.map((row) => (
          <div key={row.day} className="card p-4">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{row.day}</h3>
            <div className="space-y-2">
              {row.periods.map((p, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                  <div>
                    <p className="text-xs text-slate-500">Period {i + 1}</p>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{p}</p>
                  </div>
                  <span className="text-xs text-slate-500">{times[i]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
                  }
