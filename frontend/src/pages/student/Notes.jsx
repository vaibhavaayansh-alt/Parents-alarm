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
