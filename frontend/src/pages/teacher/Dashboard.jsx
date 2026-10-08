import { Link } from 'react-router-dom';
import { Users, BookOpen, CalendarCheck, ClipboardList, Bell } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import { NOTICES } from '../../data/demoData';
import StatCard from '../../components/ui/StatCard';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';

export default function TeacherDashboard() {
  const { data: classes, loading } = useApi(() => api.getTeacherClasses());
  if (loading) return <LoadingSpinner />;

  const totalStudents = classes.reduce((a, c) => a + c.students, 0);

  const stats = [
    { label: 'Total Classes',     value: classes.length,  sub: 'Across grades',      tone: 'navy',    icon: 'BookOpen' },
    { label: 'Total Students',    value: totalStudents,   sub: 'Under your subject', tone: 'emerald', icon: 'Users' },
    { label: "Today's Classes",   value: 4,               sub: 'Next at 08:45',      tone: 'indigo',  icon: 'CalendarCheck' },
    { label: 'Pending Homework',  value: 2,               sub: 'To review',          tone: 'amber',   icon: 'ClipboardList' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Welcome back, Dr. Ananya Sharma 👋</h1>
        <p className="text-sm text-slate-500 mt-1">Here's what's happening in your classes today</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 dark:text-white">My Classes</h2>
            <Link to="/teacher/classes" className="text-sm font-medium text-navy-700 dark:text-navy-300 hover:underline">View all →</Link>
          </div>
          <div className="space-y-2">
            {classes.map((c) => (
              <div key={c.id} className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 flex items-center justify-center font-bold text-sm shrink-0">
                  {c.class}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Class {c.class}-{c.section}</p>
                  <p className="text-xs text-slate-500 truncate">{c.subject}</p>
                </div>
                <Badge tone="info">{c.students} students</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-navy-700 dark:text-navy-300" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Recent Notices</h2>
          </div>
          <div className="space-y-3">
            {NOTICES.slice(0, 4).map((n) => (
              <div key={n.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <div className="flex items-center gap-2 mb-1">
                  <Badge tone="info">{n.category}</Badge>
                  <span className="text-[10px] text-slate-500">{n.date}</span>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100 line-clamp-2">{n.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { to: '/teacher/attendance', label: 'Mark Attendance', icon: CalendarCheck, tone: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10' },
          { to: '/teacher/homework',   label: 'Assign Homework', icon: ClipboardList, tone: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10' },
          { to: '/teacher/notes',      label: 'Upload Notes',    icon: BookOpen,      tone: 'bg-navy-50 text-navy-700 dark:bg-navy-500/10' },
          { to: '/notices',            label: 'Publish Notice',  icon: Bell,          tone: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10' },
        ].map((a) => {
          const Icon = a.icon;
          return (
            <Link key={a.to} to={a.to} className="card p-5 hover:shadow-card-hover transition-all hover:-translate-y-0.5">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${a.tone}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-3 font-medium text-slate-900 dark:text-white">{a.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
