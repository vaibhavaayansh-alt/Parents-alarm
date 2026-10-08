import { useMemo, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import TeacherCard from '../../components/cards/TeacherCard';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import EmptyState from '../../components/ui/EmptyState';
import SearchBar from '../../components/ui/SearchBar';
import { Users } from 'lucide-react';

export default function Teachers() {
  const { data, loading } = useApi(() => api.getTeachers());
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('All');
  const [dept, setDept] = useState('All');

  const subjects = useMemo(() => ['All', ...new Set((data || []).flatMap((t) => t.subjects))], [data]);
  const depts = useMemo(() => ['All', ...new Set((data || []).map((t) => t.department))], [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((t) =>
      (subject === 'All' || t.subjects.includes(subject)) &&
      (dept === 'All' || t.department === dept) &&
      (t.name.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, search, subject, dept]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Teachers Directory</h1>
        <p className="text-sm text-slate-500 mt-1">Meet our faculty members</p>
      </div>

      <div className="card p-4 flex flex-col sm:flex-row gap-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search by name or ID..." className="flex-1" />
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="input sm:w-44">
          {subjects.map((s) => <option key={s}>{s === 'All' ? 'All Subjects' : s}</option>)}
        </select>
        <select value={dept} onChange={(e) => setDept(e.target.value)} className="input sm:w-44">
          {depts.map((d) => <option key={d}>{d === 'All' ? 'All Departments' : d}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Users} title="No teachers found" message="Try adjusting filters." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((t) => <TeacherCard key={t.id} teacher={t} />)}
        </div>
      )}
    </div>
  );
}
