import { useState, useMemo } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import SearchBar from '../../components/ui/SearchBar';
import EmptyState from '../../components/ui/EmptyState';
import Badge from '../../components/ui/Badge';
import { Briefcase, Mail, Phone } from 'lucide-react';

const CATS = ['All', 'Teachers', 'Principal', 'Director', 'Accountant', 'Administrative Staff', 'Support Staff'];

export default function StaffDirectory() {
  const { data, loading } = useApi(() => api.getStaff());
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((s) =>
      (cat === 'All' || s.category === cat) &&
      (s.name.toLowerCase().includes(search.toLowerCase()) || s.designation.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, cat, search]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Staff Directory</h1>
          <p className="text-sm text-slate-500 mt-1">All school staff — faculty, admin & support</p>
        </div>
        <SearchBar value={search} onChange={setSearch} placeholder="Search staff..." className="sm:w-72" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              cat === c ? 'bg-navy-700 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-navy-500'
            }`}>
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Briefcase} title="No staff found" message="Try adjusting your filters." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <div key={s.id} className="card p-5 hover:shadow-card-hover transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-semibold text-lg shrink-0">
                  {s.avatar}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white truncate">{s.name}</h3>
                  <p className="text-sm text-navy-700 dark:text-navy-300 font-medium">{s.designation}</p>
                  <Badge tone="neutral">{s.department}</Badge>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" /><span className="truncate">{s.mobile}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" /><span className="truncate">{s.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
