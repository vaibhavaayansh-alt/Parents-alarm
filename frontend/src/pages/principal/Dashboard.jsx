import { Users, GraduationCap, CalendarCheck, Wallet, Bell, PartyPopper, TrendingUp, BookOpen } from 'lucide-react';
import { NOTICES, TEACHERS } from '../../data/demoData';
import StatCard from '../../components/ui/StatCard';
import Badge from '../../components/ui/Badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const classPerformance = [
  { class: 'VI',  score: 82 }, { class: 'VII', score: 86 }, { class: 'VIII', score: 84 },
  { class: 'IX',  score: 88 }, { class: 'X',   score: 90 }, { class: 'XI', score: 85 }, { class: 'XII', score: 87 },
];

const classAttendance = [
  { class: 'VI',  pct: 95 }, { class: 'VII', pct: 93 }, { class: 'VIII', pct: 94 },
  { class: 'IX',  pct: 96 }, { class: 'X',   pct: 92 }, { class: 'XI', pct: 91 }, { class: 'XII', pct: 94 },
];

export default function PrincipalDashboard() {
  const stats = [
    { label: 'Total Students',   value: '1,240', sub: 'Across all classes', tone: 'navy',    icon: 'Users' },
    { label: 'Total Teachers',   value: TEACHERS.length * 10, sub: 'Faculty members', tone: 'emerald', icon: 'GraduationCap' },
    { label: 'Attendance Today', value: '94.2%', sub: 'School-wide',        tone: 'indigo',  icon: 'CalendarCheck' },
    { label: 'Pending Fees',     value: '₹4.8L', sub: '142 students',       tone: 'amber',   icon: 'Wallet' },
    { label: 'Active Notices',   value: NOTICES.length, sub: 'Published',   tone: 'rose',    icon: 'Bell' },
    { label: 'Upcoming Events',  value: 6,       sub: 'This quarter',       tone: 'purple',  icon: 'PartyPopper' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Principal Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">School-level overview · Session 2026–27</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-navy-700 dark:text-navy-300" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Academic Overview</h2>
            <span className="text-xs text-slate-500 ml-auto">Class-wise avg. %</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="class" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Bar dataKey="score" fill="#2d4a8a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-5">
            <CalendarCheck className="w-4 h-4 text-emerald-600" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Attendance Overview</h2>
            <span className="text-xs text-slate-500 ml-auto">Class-wise %</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={classAttendance}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="class" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} domain={[85, 100]} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Line type="monotone" dataKey="pct" stroke="#059669" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
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

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Recent Homework</h2>
          </div>
          <div className="space-y-3">
            {[
              { s: 'Math', t: 'Exercise 4.3', c: 'VIII-A' },
              { s: 'Science', t: 'Cell Diagrams', c: 'VIII-A' },
              { s: 'English', t: 'Essay Draft', c: 'VII-C' },
              { s: 'Hindi', t: 'संधि अभ्यास', c: 'X-A' },
            ].map((h, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">{h.s[0]}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{h.t}</p>
                  <p className="text-xs text-slate-500">{h.s} · Class {h.c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-emerald-600" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Teacher Overview</h2>
          </div>
          <div className="space-y-3">
            {TEACHERS.slice(0, 4).map((t) => (
              <div key={t.id} className="flex items-center gap-3 p-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{t.name}</p>
                  <p className="text-xs text-slate-500 truncate">{t.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
               }
