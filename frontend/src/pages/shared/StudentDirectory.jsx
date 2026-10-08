import { useState, useMemo } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import SearchBar from '../../components/ui/SearchBar';
import EmptyState from '../../components/ui/EmptyState';
import Badge from '../../components/ui/Badge';
import { Users } from 'lucide-react';

export default function StudentDirectory() {
  const { data, loading } = useApi(() => api.getStudents());
  const [search, setSearch] = useState('');
  const [cls, setCls] = useState('All');

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((s) =>
      (cls === 'All' || s.class === cls) &&
      (s.name.toLowerCase().includes(search.toLowerCase()) || s.admissionNo.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, search, cls]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Student Directory</h1>
        <p className="text-sm text-slate-500 mt-1">Authorized staff only</p>
      </div>

      <div className="card p-4 flex flex-col sm:flex-row gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search by name or admission no..." className="flex-1" />
        <select value={cls} onChange={(e) => setCls(e.target.value)} className="input sm:w-44">
          {['All', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((c) => <option key={c}>{c === 'All' ? 'All Classes' : `Class ${c}`}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Users} title="No students found" message="Try adjusting your filters." />
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60">
                <tr>
                  {['Admission No', 'Name', 'Class', 'Section', 'Roll', 'Attendance', 'Performance'].map((h) => (
                    <th key={h} className="text-left px-4 sm:px-6 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filtered.map((s) => (
                  <tr key={s.admissionNo} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                    <td className="px-4 sm:px-6 py-3 font-mono text-xs text-slate-600 dark:text-slate-300">{s.admissionNo}</td>
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100 whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{s.class}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{s.section}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{s.rollNo}</td>
                    <td className="px-4 py-3"><Badge tone={s.attendance >= 90 ? 'success' : s.attendance >= 75 ? 'warning' : 'danger'}>{s.attendance}%</Badge></td>
                    <td className="px-4 py-3"><Badge tone={s.performance >= 85 ? 'success' : s.performance >= 70 ? 'info' : 'warning'}>{s.performance}%</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
