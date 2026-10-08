import { useMemo, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import { SUBJECTS } from '../../data/demoData';
import HomeworkCard from '../../components/cards/HomeworkCard';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import EmptyState from '../../components/ui/EmptyState';
import Modal from '../../components/ui/Modal';
import SearchBar from '../../components/ui/SearchBar';
import { BookOpen } from 'lucide-react';

export default function Homework() {
  const { data, loading } = useApi(() => api.getHomework());
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((h) =>
      (filter === 'All' || h.subject === filter) &&
      (h.title.toLowerCase().includes(search.toLowerCase()) || h.description.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, filter, search]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Homework</h1>
          <p className="text-sm text-slate-500 mt-1">All assignments and their current status</p>
        </div>
        <SearchBar value={search} onChange={setSearch} placeholder="Search homework..." className="sm:w-72" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {['All', ...SUBJECTS].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              filter === s
                ? 'bg-navy-700 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-navy-500'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={BookOpen} title="No homework available" message="Try adjusting your filters or search query." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((h) => <HomeworkCard key={h.id} hw={h} onView={setSelected} />)}
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="badge bg-navy-50 text-navy-700 dark:bg-navy-500/10 dark:text-navy-300">{selected.subject}</span>
              <span className={`badge ${
                selected.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' :
                selected.status === 'Submitted' ? 'bg-navy-50 text-navy-700' :
                selected.status === 'Overdue' ? 'bg-rose-50 text-rose-700' :
                'bg-amber-50 text-amber-700'
              }`}>{selected.status}</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{selected.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Field label="Assigned Date" value={selected.assignedDate} />
              <Field label="Due Date" value={selected.dueDate} />
              <Field label="Teacher" value={selected.teacher} />
              <Field label="Subject" value={selected.subject} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-medium text-slate-900 dark:text-white mt-0.5">{value}</p>
    </div>
  );
}
