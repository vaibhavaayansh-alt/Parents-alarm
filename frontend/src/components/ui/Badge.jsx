const tones = {
  success: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
  warning: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  danger:  'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
  info:    'bg-navy-50 text-navy-700 dark:bg-navy-500/10 dark:text-navy-300',
  neutral: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  purple:  'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
};

export default function Badge({ tone = 'neutral', children }) {
  return <span className={`badge ${tones[tone]}`}>{children}</span>;
}
