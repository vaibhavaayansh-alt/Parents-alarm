import { useState } from 'react';
import { Calendar, GraduationCap, PartyPopper, Trophy, BookOpen, Award, MapPin } from 'lucide-react';
import { ANNUAL_CALENDAR } from '../../data/demoData';
import Badge from '../../components/ui/Badge';

const typeTone = {
  Academic: 'info',
  Holiday: 'success',
  Event: 'warning',
  Examination: 'danger',
  Competition: 'purple',
  Sports: 'purple',
  'School Event': 'info',
};

const typeIcon = {
  Academic: BookOpen,
  Holiday: PartyPopper,
  Event: PartyPopper,
  Examination: GraduationCap,
  Competition: Trophy,
  Sports: Trophy,
  'School Event': Award,
};

export default function AnnualCalendar() {
  const [activeMonth, setActiveMonth] = useState(ANNUAL_CALENDAR[0].month);

  const currentMonth = ANNUAL_CALENDAR.find((m) => m.month === activeMonth);
  const allEvents = ANNUAL_CALENDAR.flatMap((m) => m.events);

  const stats = {
    holidays: allEvents.filter((e) => e.type === 'Holiday').length,
    exams: allEvents.filter((e) => e.type === 'Examination').length,
    events: allEvents.filter((e) => e.type === 'Event' || e.type === 'School Event' || e.type === 'Sports' || e.type === 'Competition').length,
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Annual Calendar</h1>
          <p className="text-sm text-slate-500 mt-1">Academic year 2026–27 · All events, exams & holidays</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: 'Holidays',    value: stats.holidays, tone: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300', icon: PartyPopper },
          { label: 'Examinations', value: stats.exams,   tone: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300', icon: GraduationCap },
          { label: 'Events',      value: stats.events,  tone: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300', icon: Trophy },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="card p-4 sm:p-5">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.tone}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 mt-3">{s.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{s.value}</p>
            </div>
          );
        })}
      </div>

      {/* Month Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {ANNUAL_CALENDAR.map((m) => (
          <button
            key={m.month}
            onClick={() => setActiveMonth(m.month)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition ${
              activeMonth === m.month
                ? 'bg-orange-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-orange-500'
            }`}
          >
            {m.month.split(' ')[0]}
            <span className="text-[10px] opacity-70 ml-1">{m.month.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Active Month */}
      <div className="card p-5">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-lg">{currentMonth.month}</h2>
            <p className="text-xs text-slate-500">{currentMonth.events.length} events</p>
          </div>
        </div>

        <div className="space-y-2">
          {currentMonth.events.map((e, i) => {
            const Icon = typeIcon[e.type] || Calendar;
            return (
              <div key={i} className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  e.type === 'Holiday' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300' :
                  e.type === 'Examination' ? 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300' :
                  e.type === 'Sports' || e.type === 'Competition' ? 'bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300' :
                  'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{e.name}</p>
                    <Badge tone={typeTone[e.type]}>{e.type}</Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{e.date}, {currentMonth.month}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Year Table */}
      <div className="card overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-semibold text-slate-900 dark:text-white">Full Year at a Glance</h2>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {ANNUAL_CALENDAR.map((m) => (
            <div key={m.month} className="p-5 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
              <p className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider mb-3">{m.month}</p>
              <div className="space-y-2">
                {m.events.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-slate-500 w-16 shrink-0 pt-0.5">{e.date}</span>
                    <div className="flex-1">
                      <p className="text-sm text-slate-800 dark:text-slate-100">{e.name}</p>
                    </div>
                    <Badge tone={typeTone[e.type]}>{e.type}</Badge>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
