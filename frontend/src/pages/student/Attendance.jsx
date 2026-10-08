import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import AttendanceCalendar from '../../components/cards/AttendanceCalendar';
import Badge from '../../components/ui/Badge';
import { Download } from 'lucide-react';

export default function Attendance() {
  const { data, loading } = useApi(() => api.getAttendance());
  if (loading) return <LoadingSpinner />;

  const { stats, summary, month } = data;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Attendance</h1>
          <p className="text-sm text-slate-500 mt-1">Session overview & monthly calendar</p>
        </div>
        <button onClick={() => window.print()} className="btn-primary">
          <Download className="w-4 h-4" /> Download Report
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        <Tile label="Total Working Days" value={stats.workingDays} tone="navy" />
        <Tile label="Present" value={stats.present} tone="emerald" />
        <Tile label="Absent" value={stats.absent} tone="rose" />
        <Tile label="Leave" value={stats.leave} tone="amber" />
        <Tile label="Attendance %" value={`${stats.percentage}%`} tone="indigo" />
      </div>

      <AttendanceCalendar month={month} />

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-semibold text-slate-900 dark:text-white">Attendance Summary</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                {['Month', 'Working Days', 'Present', 'Absent', 'Percentage'].map((h) => (
                  <th key={h} className="text-left px-4 sm:px-6 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {summary.map((r) => (
                <tr key={r.month} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 sm:px-6 py-3 font-medium text-slate-800 dark:text-slate-100">{r.month}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{r.working}</td>
                  <td className="px-4 py-3 text-emerald-600 font-medium">{r.present}</td>
                  <td className="px-4 py-3 text-rose-600 font-medium">{r.absent}</td>
                  <td className="px-4 py-3"><Badge tone={r.percentage >= 90 ? 'success' : r.percentage >= 75 ? 'warning' : 'danger'}>{r.percentage}%</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Tile({ label, value, tone }) {
  const tones = {
    navy: 'bg-navy-50 text-navy-800 dark:bg-navy-500/10 dark:text-navy-200',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
    indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
  };
  return (
    <div className={`rounded-2xl p-4 ${tones[tone]}`}>
      <p className="text-xs opacity-80">{label}</p>
      <p className="text-xl sm:text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
