import * as Icons from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const toneMap = {
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  navy:    'bg-navy-50 text-navy-700 dark:bg-navy-500/10 dark:text-navy-300',
  amber:   'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  indigo:  'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400',
  rose:    'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
  purple:  'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
};

export default function StatCard({ icon = 'Activity', label, value, sub, tone = 'navy', trend }) {
  const Icon = Icons[icon] || Icons.Activity;
  return (
    <div className="card p-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${toneMap[tone]}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <span className={`inline-flex items-center gap-1 text-xs font-medium ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
            {trend > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
        {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
      </div>
    </div>
  );
}
