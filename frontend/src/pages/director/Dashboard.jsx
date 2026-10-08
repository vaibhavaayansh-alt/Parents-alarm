import { TrendingUp, Users, Briefcase, GraduationCap, Wallet, AlertCircle, CalendarCheck, Award } from 'lucide-react';
import StatCard from '../../components/ui/StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar } from 'recharts';
import { NOTICES } from '../../data/demoData';
import Badge from '../../components/ui/Badge';

const attendanceTrend = [
  { m: 'Apr', v: 96 }, { m: 'May', v: 94 }, { m: 'Jun', v: 92 }, { m: 'Jul', v: 95 },
  { m: 'Aug', v: 93 }, { m: 'Sep', v: 95 }, { m: 'Oct', v: 94 },
];
const academicTrend = [
  { m: 'Apr', v: 78 }, { m: 'May', v: 80 }, { m: 'Jun', v: 82 }, { m: 'Jul', v: 84 },
  { m: 'Aug', v: 86 }, { m: 'Sep', v: 85 }, { m: 'Oct', v: 88 },
];
const feeCollection = [
  { m: 'Apr', v: 42 }, { m: 'May', v: 38 }, { m: 'Jun', v: 55 }, { m: 'Jul', v: 48 },
  { m: 'Aug', v: 62 }, { m: 'Sep', v: 58 }, { m: 'Oct', v: 71 },
];
const strength = [
  { name: 'Primary',  value: 420, color: '#2d4a8a' },
  { name: 'Middle',   value: 380, color: '#3d61a8' },
  { name: 'Senior',   value: 280, color: '#5c80c1' },
  { name: 'Sr. Sec.', value: 160, color: '#8aa5d5' },
];

export default function DirectorDashboard() {
  const stats = [
    { label: 'Total Students',       value: '1,240',  sub: '+4.2% YoY',     tone: 'navy',    icon: 'Users', trend: 4.2 },
    { label: 'Total Staff',          value: '128',    sub: 'All categories', tone: 'indigo',  icon: 'Briefcase' },
    { label: 'Total Teachers',       value: '86',     sub: 'Faculty',        tone: 'emerald', icon: 'GraduationCap' },
    { label: 'Total Fee Collection', value: '₹8.4Cr', sub: 'This session',   tone: 'navy',    icon: 'Wallet', trend: 8.1 },
    { label: 'Pending Fees',         value: '₹42L',   sub: '142 students',   tone: 'amber',   icon: 'AlertCircle' },
    { label: 'Average Attendance',   value: '94.2%',  sub: 'School-wide',    tone: 'emerald', icon: 'CalendarCheck' },
    { label: 'Academic Performance', value: '87.6%',  sub: 'Avg. score',     tone: 'purple',  icon: 'Award', trend: 2.4 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Director Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">High-level school performance overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <ChartCard title="Attendance Trend" subtitle="Monthly average %">
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={attendanceTrend}>
              <defs>
                <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} domain={[85, 100]} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="v" stroke="#059669" strokeWidth={3} fill="url(#ga)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Academic Performance" subtitle="Monthly average score %">
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={academicTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} domain={[70, 95]} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Line type="monotone" dataKey="v" stroke="#7c3aed" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Fee Collection" subtitle="Monthly collection in ₹Lakhs">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={feeCollection}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Bar dataKey="v" fill="#2d4a8a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Student Strength" subtitle="Distribution by section">
          <div className="flex items-center gap-4">
            <ResponsiveContainer width="60%" height={220}>
              <PieChart>
                <Pie data={strength} dataKey="value" innerRadius={50} outerRadius={85} paddingAngle={3}>
                  {strength.map((s) => <Cell key={s.name} fill={s.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 flex-1">
              {strength.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-slate-600 dark:text-slate-300 flex-1">{s.name}</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ChartCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Department Overview</h2>
          <div className="space-y-3">
            {[
              { d: 'Science',    staff: 22, students: 320 },
              { d: 'Mathematics', staff: 18, students: 240 },
              { d: 'Languages',  staff: 24, students: 280 },
              { d: 'Social Science', staff: 14, students: 200 },
              { d: 'Computer Science', staff: 8, students: 200 },
            ].map((d) => (
              <div key={d.d} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{d.d}</p>
                  <p className="text-xs text-slate-500">{d.staff} staff · {d.students} students</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Important Notices</h2>
          <div className="space-y-3">
            {NOTICES.filter((n) => n.important).map((n) => (
              <div key={n.id} className="p-3.5 rounded-xl border border-rose-100 dark:border-rose-500/20 bg-rose-50/40 dark:bg-rose-500/5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge tone="danger">Important</Badge>
                  <span className="text-[10px] text-slate-500">{n.date}</span>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{n.title}</p>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="card p-5">
      <div className="mb-4">
        <h2 className="font-semibold text-slate-900 dark:text-white">{title}</h2>
        <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      {children}
    </div>
  );
      }
