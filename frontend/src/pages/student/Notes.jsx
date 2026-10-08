import { useState, useMemo } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import { SUBJECTS } from '../../data/demoData';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import EmptyState from '../../components/ui/EmptyState';
import SearchBar from '../../components/ui/SearchBar';
import { FileText, Download, Eye, FileType } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const typeColor = { PDF: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400', DOCX: 'bg-navy-50 text-navy-700', PPTX: 'bg-amber-50 text-amber-700' };

export default function Notes() {
  const { data, loading } = useApi(() => api.getNotes());
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { push } = useToast();

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((n) =>
      (filter === 'All' || n.subject === filter) &&
      (n.title.toLowerCase().includes(search.toLowerCase()) || n.chapter.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, filter, search]);

  if (loading) return <LoadingSpinner />;

  const onAction = (n, action) => push(`${action}: "${n.title}" (demo)`, 'info');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Notes & Study Material</h1>
          <p className="text-sm text-slate-500 mt-1">All resources shared by your teachers</p>
        </div>
        <SearchBar value={search} onChange={setSearch} placeholder="Search notes..." className="sm:w-72" />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {['All', ...SUBJECTS].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3.5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              filter === s ? 'bg-navy-700 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-navy-500'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={FileText} title="No study material found" message="Try a different subject or search query." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((n) => (
            <div key={n.id} className="card p-5 hover:shadow-card-hover transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 flex items-center justify-center shrink-0">
                  <FileType className="w-5 h-5" />
                </div>
                <span className={`badge ${typeColor[n.type] || typeColor.PDF}`}>{n.type}</span>
              </div>
              <p className="text-xs font-medium text-navy-700 dark:text-navy-300 mt-3">{n.subject} · {n.chapter}</p>
              <h3 className="font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2">{n.title}</h3>
              <p className="text-xs text-slate-500 mt-2">{n.teacher} · {n.uploadDate}</p>
              <p className="text-xs text-slate-500">Size: {n.size}</p>
              <div className="flex gap-2 mt-4">
                <button onClick={() => onAction(n, 'View')} className="btn-secondary flex-1 text-xs py-2">
                  <Eye className="w-3.5 h-3.5" />View
                </button>
                <button onClick={() => onAction(n, 'Download')} className="btn-primary flex-1 text-xs py-2">
                  <Download className="w-3.5 h-3.5" />Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
