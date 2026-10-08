import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { api } from '../../services/api';
import { STUDENT, SCHOOL } from '../../data/demoData';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import Badge from '../../components/ui/Badge';
import { Download, Printer } from 'lucide-react';

const EXAMS = ['Unit Test 1', 'Half-Yearly', 'Unit Test 2', 'Annual Examination'];

function grade(pct) {
  if (pct >= 90) return { g: 'A+', tone: 'success' };
  if (pct >= 80) return { g: 'A',  tone: 'success' };
  if (pct >= 70) return { g: 'B+', tone: 'info' };
  if (pct >= 60) return { g: 'B',  tone: 'info' };
  if (pct >= 50) return { g: 'C',  tone: 'warning' };
  if (pct >= 40) return { g: 'D',  tone: 'warning' };
  return { g: 'F', tone: 'danger' };
}

export default function Marksheet() {
  const { data: marks, loading } = useApi(() => api.getMarks());
  const [exam, setExam] = useState('Half-Yearly');

  if (loading) return <LoadingSpinner />;

  const rows = marks[exam];
  const totalMax = rows.reduce((a, r) => a + r.max, 0);
  const totalObt = rows.reduce((a, r) => a + r.obtained, 0);
  const pct = ((totalObt / totalMax) * 100).toFixed(2);
  const overall = grade(pct);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="card p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Marksheet / Results</h1>
            <p className="text-sm text-slate-500 mt-1">Academic Session: {SCHOOL.session}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => window.print()} className="btn-secondary">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={() => window.print()} className="btn-primary">
              <Download className="w-4 h-4" /> Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {EXAMS.map((e) => (
          <button
            key={e}
            onClick={() => setExam(e)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              exam === e
                ? 'bg-navy-700 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-navy-500'
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden" id="marksheet">
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-bold">BF</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{SCHOOL.name}</p>
                <p className="text-xs text-slate-500">{SCHOOL.address}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Session</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{SCHOOL.session}</p>
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-200 dark:border-slate-800">
          <Meta label="Student Name" value={STUDENT.name} />
          <Meta label="Class" value={`${STUDENT.class}-${STUDENT.section}`} />
          <Meta label="Roll Number" value={STUDENT.rollNo} />
          <Meta label="Examination" value={exam} />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                <th className="text-left px-4 sm:px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">Subject</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Maximum Marks</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Marks Obtained</th>
                <th className="text-center px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Percentage</th>
                <th className="text-center px-4 sm:px-6 py-3 font-semibold text-slate-600 dark:text-slate-300">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {rows.map((r) => {
                const p = ((r.obtained / r.max) * 100).toFixed(1);
                const g = grade(p);
                return (
                  <tr key={r.subject} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                    <td className="px-4 sm:px-6 py-3 font-medium text-slate-800 dark:text-slate-100">{r.subject}</td>
                    <td className="px-4 py-3 text-center text-slate-600 dark:text-slate-300">{r.max}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-900 dark:text-white">{r.obtained}</td>
                    <td className="px-4 py-3 text-center text-slate-600 dark:text-slate-300">{p}%</td>
                    <td className="px-4 sm:px-6 py-3 text-center"><Badge tone={g.tone}>{g.g}</Badge></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 dark:bg-slate-800/60 font-semibold">
                <td className="px-4 sm:px-6 py-3 text-slate-900 dark:text-white">Total</td>
                <td className="px-4 py-3 text-center text-slate-900 dark:text-white">{totalMax}</td>
                <td className="px-4 py-3 text-center text-slate-900 dark:text-white">{totalObt}</td>
                <td className="px-4 py-3 text-center text-slate-900 dark:text-white">{pct}%</td>
                <td className="px-4 sm:px-6 py-3 text-center"><Badge tone={overall.tone}>{overall.g}</Badge></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard label="Overall Percentage" value={`${pct}%`} tone="navy" />
        <SummaryCard label="Overall Grade" value={overall.g} tone="emerald" />
        <SummaryCard label="Class Rank (demo)" value="#4 / 32" tone="indigo" />
        <SummaryCard label="Result Status" value={pct >= 40 ? 'PASS' : 'FAIL'} tone={pct >= 40 ? 'emerald' : 'rose'} />
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">{value}</p>
    </div>
  );
}

function SummaryCard({ label, value, tone }) {
  const tones = {
    navy: 'bg-navy-50 text-navy-800 dark:bg-navy-500/10 dark:text-navy-200',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
    indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300',
  };
  return (
    <div className={`rounded-2xl p-5 ${tones[tone]}`}>
      <p className="text-xs opacity-80">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
      }
