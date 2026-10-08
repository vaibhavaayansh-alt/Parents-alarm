import { Wallet, TrendingUp, AlertCircle, Receipt, Users } from 'lucide-react';
import StatCard from '../../components/ui/StatCard';
import { FEES } from '../../data/demoData';
import Badge from '../../components/ui/Badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const monthly = [
  { m: 'Apr', v: 42 }, { m: 'May', v: 38 }, { m: 'Jun', v: 55 }, { m: 'Jul', v: 48 },
  { m: 'Aug', v: 62 }, { m: 'Sep', v: 58 }, { m: 'Oct', v: 71 },
];

export default function AccountantDashboard() {
  const stats = [
    { label: 'Total Annual Fee',    value: `₹${(FEES.summary.total / 1000).toFixed(0)}K`, sub: 'Per student (avg.)', tone: 'navy',    icon: 'Wallet' },
    { label: 'Collected This Month', value: '₹71L', sub: '+12.4% MoM',   tone: 'emerald', icon: 'TrendingUp', trend: 12.4 },
    { label: 'Pending Amount',      value: '₹42L',  sub: '142 students', tone: 'amber',   icon: 'AlertCircle' },
    { label: 'Defaulters',          value: '142',   sub: 'Across all classes', tone: 'rose', icon: 'Users' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Accounts Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Fee collection and financial overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-5">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <h2 className="font-semibold text-slate-900 dark:text-white">Monthly Fee Collection</h2>
            <span className="text-xs text-slate-500 ml-auto">₹ Lakhs</span>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthly}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="m" stroke="#94a3b8" fontSize={12} />
              <YAxis stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Bar dataKey="v" fill="#2d4a8a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-5">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {FEES.history.slice(0, 5).map((t) => (
              <div key={t.id} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Receipt className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{t.desc}</p>
                  <p className="text-xs text-slate-500">{t.date} · {t.mode}</p>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">₹{(t.amount / 1000).toFixed(0)}K</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-semibold text-slate-900 dark:text-white">Fee Type Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                {['Fee Type', 'Total', 'Paid', 'Pending', 'Status'].map((h) => (
                  <th key={h} className="text-left px-4 sm:px-6 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {FEES.breakdown.map((f) => (
                <tr key={f.type} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 sm:px-6 py-3 font-medium text-slate-800 dark:text-slate-100">{f.type}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">₹{f.total.toLocaleString()}</td>
                  <td className="px-4 py-3 text-emerald-600 font-medium">₹{f.paid.toLocaleString()}</td>
                  <td className="px-4 py-3 text-amber-600 font-medium">₹{f.pending.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <Badge tone={f.status === 'Paid' ? 'success' : f.status === 'Pending' ? 'danger' : 'warning'}>{f.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
