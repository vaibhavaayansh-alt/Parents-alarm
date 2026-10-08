import { useState } from 'react';
import { TEACHER_CLASSES, STUDENTS } from '../../data/demoData';
import { Save, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import Badge from '../../components/ui/Badge';

const STATUSES = [
  { key: 'Present', icon: CheckCircle2, tone: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10' },
  { key: 'Absent',  icon: XCircle,      tone: 'text-rose-600 bg-rose-50 dark:bg-rose-500/10' },
  { key: 'Leave',   icon: Clock,        tone: 'text-amber-600 bg-amber-50 dark:bg-amber-500/10' },
];

export default function AttendanceManage() {
  const [cls, setCls] = useState('VIII');
  const [section, setSection] = useState('A');
  const [subject, setSubject] = useState('Science');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [records, setRecords] = useState(() => Object.fromEntries(STUDENTS.map((s) => [s.admissionNo, 'Present'])));
  const { push } = useToast();

  const save = async () => {
    const present = Object.values(records).filter((v) => v === 'Present').length;
    const absent = Object.values(records).filter((v) => v === 'Absent').length;
    push(`Attendance saved: ${present} present, ${absent} absent.`, 'success');
  };

  const setAll = (status) => setRecords(Object.fromEntries(STUDENTS.map((s) => [s.admissionNo, status])));
  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s.key]: Object.values(records).filter((v) => v === s.key).length }), {});

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Attendance Management</h1>
        <p className="text-sm text-slate-500 mt-1">Mark daily attendance for your classes</p>
      </div>

      <div className="card p-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="label">Class</label>
            <select value={cls} onChange={(e) => setCls(e.target.value)} className="input">
              {['VI', 'VII', 'VIII', 'IX', 'X'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Section</label>
            <select value={section} onChange={(e) => setSection(e.target.value)} className="input">
              {['A', 'B', 'C'].map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="input">
              {['Science', 'Mathematics', 'English', 'Hindi', 'Social Science'].map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          <button onClick={() => setAll('Present')} className="btn-secondary text-xs">Mark All Present</button>
          <button onClick={() => setAll('Absent')} className="btn-secondary text-xs">Mark All Absent</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {STATUSES.map((s) => (
          <div key={s.key} className={`rounded-2xl p-4 ${s.tone.split(' ').slice(1).join(' ')}`}>
            <div className="flex items-center gap-2">
              <s.icon className={`w-4 h-4 ${s.tone.split(' ')[0]}`} />
              <p className="text-xs font-medium">{s.key}</p>
            </div>
            <p className={`text-2xl font-bold mt-1.5 ${s.tone.split(' ')[0]}`}>{counts[s.key]}</p>
          </div>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-semibold text-slate-900 dark:text-white">Students — Class {cls}-{section}</h2>
          <Badge tone="info">{STUDENTS.length} students</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300 w-16">Roll</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Student Name</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {STUDENTS.map((s) => (
                <tr key={s.admissionNo} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{s.rollNo}</td>
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-100">{s.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1.5 flex-wrap">
                      {STATUSES.map((st) => {
                        const Icon = st.icon;
                        const active = records[s.admissionNo] === st.key;
                        return (
                          <button
                            key={st.key}
                            onClick={() => setRecords((r) => ({ ...r, [s.admissionNo]: st.key }))}
                            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                              active ? st.tone + ' ring-2 ring-offset-1 ring-navy-400 dark:ring-offset-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />{st.key}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button onClick={save} className="btn-primary"><Save className="w-4 h-4" />Save Attendance</button>
        </div>
      </div>
    </div>
  );
                                    }
