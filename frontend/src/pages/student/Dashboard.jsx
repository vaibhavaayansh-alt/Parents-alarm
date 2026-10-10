import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import { STUDENT, SCHOOL } from '../../data/demoData';
import StatCard from '../../components/ui/StatCard';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import NoticeCard from '../../components/cards/NoticeCard';
import Modal from '../../components/ui/Modal';
import Badge from '../../components/ui/Badge';

export default function Dashboard() {
  const { data, loading } = useApi(() => api.getDashboard());
  const [selectedNotice, setSelectedNotice] = useState(null);

  if (loading) return <LoadingSpinner />;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';

  // Safe initials — no photo, only initials
  const initials = STUDENT.name.split(' ').map((n) => n[0]).join('').slice(0, 2);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Student Header */}
      <div className="card p-5 sm:p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-2xl font-bold shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-500">{greeting} 👋</p>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{STUDENT.name}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-sm text-slate-600 dark:text-slate-400">
              <span>Class {STUDENT.class}-{STUDENT.section}</span>
              <span>Roll No. {STUDENT.rollNo}</span>
              <span className="hidden sm:inline">Adm. No. {STUDENT.admissionNo}</span>
            </div>
            <p className="text-xs text-slate-500 mt-1.5">
              Class Teacher: <span className="font-medium text-slate-700 dark:text-slate-300">{STUDENT.classTeacher}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {data.stats.map((s) => <StatCard key={s.key} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Schedule */}
        <div className="lg:col-span-2 card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 dark:text-white">Today's Schedule</h2>
            <Badge tone="warning">{data.schedule.length} periods</Badge>
          </div>
          <div className="space-y-2">
            {data.schedule.map((p) => (
              <div key={p.period} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 flex items-center justify-center text-xs font-bold shrink-0">
                  {p.period}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{p.subject}</p>
                  <p className="text-xs text-slate-500 truncate">{p.teacher}</p>
                </div>
                <span className="text-xs text-slate-500 whitespace-nowrap">{p.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Homework due soon */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 dark:text-white">Homework Due Soon</h2>
          </div>
          <div className="space-y-3">
            {data.homework.filter((h) => h.status !== 'Completed').slice(0, 4).map((h) => (
              <div key={h.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs font-medium text-orange-700 dark:text-orange-400">{h.subject}</p>
                  <Badge tone={h.status === 'Overdue' ? 'danger' : h.status === 'Submitted' ? 'info' : 'warning'}>{h.status}</Badge>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100 mt-1 line-clamp-2">{h.title}</p>
                <p className="text-[11px] text-slate-500 mt-1">Due: {h.dueDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent notices */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900 dark:text-white">Recent Notices</h2>
          <a href="/notices" className="text-sm font-medium text-orange-700 dark:text-orange-400 hover:underline">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.notices.map((n) => <NoticeCard key={n.id} notice={n} onView={setSelectedNotice} />)}
        </div>
      </div>

      {/* Modal */}
      <Modal open={!!selectedNotice} onClose={() => setSelectedNotice(null)} title={selectedNotice?.title}>
        {selectedNotice && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge tone="info">{selectedNotice.category}</Badge>
              {selectedNotice.important && <Badge tone="danger">Important</Badge>}
            </div>
            <p className="text-xs text-slate-500 mb-4">{selectedNotice.date} · {selectedNotice.publishedBy}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{selectedNotice.full}</p>
          </div>
        )}
      </Modal>

      {/* School footer note */}
      <p className="text-center text-[10px] text-slate-400 pt-4">
        {SCHOOL.name} · Session {SCHOOL.session}
      </p>
    </div>
  );
}
