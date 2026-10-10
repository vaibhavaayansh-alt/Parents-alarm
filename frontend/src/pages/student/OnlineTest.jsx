import { useState } from 'react';
import { Clock, FileQuestion, Award, PlayCircle, CheckCircle2, Calendar, BarChart3, BookOpen } from 'lucide-react';
import { ONLINE_TESTS } from '../../data/demoData';
import Badge from '../../components/ui/Badge';
import { useToast } from '../../context/ToastContext';

const statusTone = { Available: 'warning', Completed: 'success', Expired: 'neutral' };

export default function OnlineTest() {
  const [tests] = useState(ONLINE_TESTS);
  const [filter, setFilter] = useState('All');
  const { push } = useToast();

  const filtered = filter === 'All' ? tests : tests.filter((t) => t.status === filter);
  const stats = [
    { label: 'Total Tests',  value: tests.length, tone: 'navy', icon: FileQuestion },
    { label: 'Available',    value: tests.filter((t) => t.status === 'Available').length, tone: 'amber', icon: PlayCircle },
    { label: 'Completed',    value: tests.filter((t) => t.status === 'Completed').length, tone: 'emerald', icon: CheckCircle2 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Online Tests</h1>
          <p className="text-sm text-slate-500 mt-1">Class IX — Practice tests & assessments</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          const tones = {
            navy: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
            amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
            emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
          };
          return (
            <div key={s.label} className="card p-4 sm:p-5">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tones[s.tone]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 mt-3">{s.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{s.value}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {['All', 'Available', 'Completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              filter === f
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-orange-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((t) => (
          <div key={t.id} className="card p-5 hover:shadow-card-hover transition-all">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <Badge tone={statusTone[t.status]}>{t.status}</Badge>
            </div>
            <p className="text-xs font-medium text-orange-700 dark:text-orange-400 mt-3">{t.subject} · Class {t.class}</p>
            <h3 className="font-semibold text-slate-900 dark:text-white mt-1 leading-snug">{t.title}</h3>

            <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
              <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <FileQuestion className="w-3.5 h-3.5 text-slate-400 mx-auto" />
                <p className="text-slate-500 mt-1">Qs</p>
                <p className="font-bold text-slate-900 dark:text-white">{t.questions}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <Clock className="w-3.5 h-3.5 text-slate-400 mx-auto" />
                <p className="text-slate-500 mt-1">Time</p>
                <p className="font-bold text-slate-900 dark:text-white text-[10px]">{t.duration}</p>
              </div>
              <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40">
                <Award className="w-3.5 h-3.5 text-slate-400 mx-auto" />
                <p className="text-slate-500 mt-1">Marks</p>
                <p className="font-bold text-slate-900 dark:text-white">{t.totalMarks}</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-4 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" /> Due: {t.dueDate}
            </div>

            {t.status === 'Completed' ? (
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Score</span>
                  <span className="text-lg font-bold text-emerald-600">{t.score}/{t.totalMarks}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(t.score / t.totalMarks) * 100}%` }} />
                </div>
                <p className="text-xs text-slate-500 mt-2">Percentage: {((t.score / t.totalMarks) * 100).toFixed(1)}%</p>
              </div>
            ) : (
              <button
                onClick={() => push('Test would start (demo mode).', 'info')}
                className="mt-4 w-full btn-primary bg-orange-600 hover:bg-orange-700 text-sm"
              >
                <PlayCircle className="w-4 h-4" /> Start Test
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
