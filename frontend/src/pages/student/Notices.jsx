import { useMemo, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import NoticeCard from '../../components/cards/NoticeCard';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import EmptyState from '../../components/ui/EmptyState';
import SearchBar from '../../components/ui/SearchBar';
import Modal from '../../components/ui/Modal';
import Badge from '../../components/ui/Badge';
import { Bell } from 'lucide-react';

const CATS = ['All', 'General', 'Academic', 'Examination', 'Holiday', 'Sports', 'Event', 'Competition', 'Important'];

export default function Notices() {
  const { data, loading } = useApi(() => api.getNotices());
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((n) =>
      (cat === 'All' || n.category === cat) &&
      (n.title.toLowerCase().includes(search.toLowerCase()) || n.description.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, cat, search]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Notice Board</h1>
          <p className="text-sm text-slate-500 mt-1">All school announcements and circulars</p>
        </div>
        <SearchBar value={search} onChange={setSearch} placeholder="Search notices..." className="sm:w-72" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              cat === c ? 'bg-navy-700 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-navy-500'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Bell} title="No notices found" message="Try a different category or search term." />
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((n) => <NoticeCard key={n.id} notice={n} onView={setSelected} />)}
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title} size="lg">
        {selected && (
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge tone="info">{selected.category}</Badge>
              {selected.important && <Badge tone="danger">Important</Badge>}
            </div>
            <p className="text-xs text-slate-500 mb-5">{selected.date} · Published by {selected.publishedBy}</p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">{selected.full}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}
