const statusStyles = {
  Present: 'bg-emerald-500 text-white',
  Absent: 'bg-rose-500 text-white',
  Leave: 'bg-amber-500 text-white',
  Holiday: 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
};

export default function AttendanceCalendar({ month }) {
  const first = new Date(2026, 9, 1).getDay();
  const blanks = Array.from({ length: first }, (_, i) => i);
  const dows = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h3 className="font-semibold text-slate-900 dark:text-white">{month.month}</h3>
        <div className="flex items-center gap-3 text-xs flex-wrap">
          {Object.entries(statusStyles).map(([k, v]) => (
            <span key={k} className="inline-flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${v.split(' ')[0]}`} />
              {k}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center text-xs font-semibold text-slate-500 mb-2">
        {dows.map((d) => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {blanks.map((b) => <div key={`b${b}`} />)}
        {month.days.map((d) => (
          <div
            key={d.day}
            className={`aspect-square rounded-lg flex items-center justify-center text-xs sm:text-sm font-medium transition ${d.status ? statusStyles[d.status] : 'bg-slate-50 dark:bg-slate-800/50 text-slate-400'}`}
          >
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
}
