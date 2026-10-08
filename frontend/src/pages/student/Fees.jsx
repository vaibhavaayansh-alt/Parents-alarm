import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';
import { Download, Wallet, TrendingUp, AlertCircle, Calendar } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const statusTone = { Paid: 'success', 'Partially Paid': 'warning', Pending: 'danger' };

export default function Fees() {
  const { data, loading } = useApi(() => api.getFees());
  const { push } = useToast();
  if (loading) return <LoadingSpinner />;

  const { summary, breakdown, history } = data;
  const paidPct = ((summary.paid / summary.total) * 100).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Fees & Accounts</h1>
          <p className="text-sm text-slate-500 mt-1">Fee breakdown, history and receipts</p>
        </div>
        <button onClick={() => push('Payment integration not enabled in demo.', 'info')} className="btn-primary">
          <Wallet className="w-4 h-4" /> Pay Now
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SumCard icon={Wallet} label="Total Annual Fee" value={`₹${summary.total.toLocaleString()}`} tone="navy" />
        <SumCard icon={TrendingUp} label="Paid Amount" value={`₹${summary.paid.toLocaleString()}`} tone="emerald" />
        <SumCard icon={AlertCircle} label="Pending Amount" value={`₹${summary.pending.toLocaleString()}`} tone="amber" />
        <SumCard icon={Calendar} label="Next Due Date" value={summary.nextDue} tone="rose" />
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Progress</p>
          <p className="text-sm font-bold text-navy-700 dark:text-navy-300">{paidPct}%</p>
        </div>
        <div className="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-navy-600 to-navy-800 transition-all" style={{ width: `${paidPct}%` }} />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-semibold text-slate-900 dark:text-white">Fee Breakdown</h2>
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
              {breakdown.map((f) => (
                <tr key={f.type} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 sm:px-6 py-3 font-medium text-slate-800 dark:text-slate-100">{f.type}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">₹{f.total.toLocaleString()}</td>
                  <td className="px-4 py-3 text-emerald-600 font-medium">₹{f.paid.toLocaleString()}</td>
                  <td className="px-4 py-3 text-amber-600 font-medium">₹{f.pending.toLocaleString()}</td>
                  <td className="px-4 py-3"><Badge tone={statusTone[f.status]}>{f.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-semibold text-slate-900 dark:text-white">Payment History</h2>
          <button onClick={() => push('Statement download (demo).', 'info')} className="text-sm font-medium text-navy-700 dark:text-navy-300 hover:underline">Download Statement</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                {['Receipt No.', 'Date', 'Description', 'Mode', 'Amount', 'Action'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((h) => (
                <tr key={h.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">{h.id}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{h.date}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{h.desc}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{h.mode}</td>
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">₹{h.amount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-700 dark:text-navy-300 hover:underline">
                      <Download className="w-3.5 h-3.5" />Receipt
                    </button>
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

function SumCard({ icon: Icon, label, value, tone }) {
  const tones = {
    navy: 'bg-navy-50 text-navy-800 dark:bg-navy-500/10 dark:text-navy-200',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  };
  return (
    <div className="card p-4">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tones[tone]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-xs text-slate-500 mt-3">{label}</p>
      <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">{value}</p>
    </div>
  );
}
