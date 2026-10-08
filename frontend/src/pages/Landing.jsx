import { Link } from 'react-router-dom';
import {
  GraduationCap, Users, CalendarCheck, BookOpen, Wallet, Bell,
  BarChart3, Shield, Smartphone, ArrowRight, CheckCircle2, School,
} from 'lucide-react';
import { SCHOOL } from '../data/demoData';

const features = [
  { icon: Users,         title: 'Student & Parent Experience', desc: 'Real-time access to attendance, marks, homework and fees in one clean dashboard.' },
  { icon: GraduationCap, title: 'Teacher Management',          desc: 'Mark attendance, assign homework, upload notes and track class performance.' },
  { icon: BarChart3,     title: 'Academic Tracking',           desc: 'Marksheets, exam schedules and progressive performance analytics.' },
  { icon: CalendarCheck, title: 'Attendance',                  desc: 'Monthly calendars, summaries and instant notification of absences.' },
  { icon: BookOpen,      title: 'Homework & Notes',            desc: 'Structured assignments with due dates and study material in one place.' },
  { icon: Wallet,        title: 'Fees & Accounts',             desc: 'Clear fee breakdown, payment history and downloadable receipts.' },
  { icon: Bell,          title: 'Notices & Events',            desc: 'Centralised notice board with categories, search and alerts.' },
  { icon: Shield,        title: 'School Administration',       desc: 'Role-based dashboards for Principals, Directors and Accountants.' },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-bold text-sm">BF</div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-slate-900 dark:text-white">BFPS</p>
              <p className="text-[10px] text-slate-500 tracking-wider">PARENTS PLATFORM</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-navy-700 dark:hover:text-white">Features</a>
            <a href="#about" className="hover:text-navy-700 dark:hover:text-white">About</a>
            <a href="#contact" className="hover:text-navy-700 dark:hover:text-white">Contact</a>
          </nav>
          <Link to="/login" className="btn-primary text-sm">Login to Portal</Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Session {SCHOOL.session} Now Live
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Your School.<br />
                <span className="bg-gradient-to-r from-navy-700 to-navy-500 bg-clip-text text-transparent">One Connected Platform.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                A smarter way for students, parents, teachers and school administrators to stay connected — attendance, homework, marks, fees and notices, all in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/login" className="btn-primary px-6 py-3 text-base">
                  Login to Portal <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#features" className="btn-secondary px-6 py-3 text-base">Explore Platform</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400">
                {['Role-based access', 'Mobile ready', 'Dark mode', 'Secure login'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative card p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-500">Good Morning 👋</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">Aarav Sharma</p>
                    <p className="text-xs text-slate-500">Class VIII-A · Roll No. 12</p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center font-bold text-sm">AS</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: 'Attendance', v: '94.4%', t: 'text-emerald-600' },
                    { l: 'Percentage', v: '87.6%', t: 'text-navy-700 dark:text-navy-300' },
                    { l: 'Pending',    v: '₹21K',  t: 'text-amber-600' },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3">
                      <p className="text-[10px] text-slate-500">{s.l}</p>
                      <p className={`text-base font-bold mt-0.5 ${s.t}`}>{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  <p className="text-xs font-medium text-slate-500">Today's Schedule</p>
                  {[
                    { s: 'Mathematics', t: '08:00', c: 'bg-indigo-500' },
                    { s: 'Science',     t: '08:45', c: 'bg-emerald-500' },
                    { s: 'English',     t: '09:45', c: 'bg-rose-500' },
                  ].map((r) => (
                    <div key={r.s} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                      <span className={`w-1 h-8 rounded-full ${r.c}`} />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100 flex-1">{r.s}</span>
                      <span className="text-xs text-slate-500">{r.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-3xl bg-gradient-to-br from-navy-500 to-navy-700 opacity-10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-wider text-navy-700 dark:text-navy-300 uppercase">Platform Features</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Everything your school needs — beautifully connected
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Built for the whole school community — students, parents, teachers and administrators.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-wider text-navy-700 dark:text-navy-300 uppercase">About the Platform</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Premium school management, built for real schools
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              {SCHOOL.name}'s Parents Platform brings the entire school ecosystem into a single, cohesive experience. From daily attendance to exam results, from homework to fee receipts — everything is available, searchable and secure.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield,     t: 'Role-based access',   d: 'Every role sees exactly what they need.' },
                { icon: Smartphone, t: 'Mobile-first',        d: 'Works beautifully on every device.' },
                { icon: BarChart3,  t: 'Actionable insights', d: 'Charts and analytics for admins.' },
                { icon: Bell,       t: 'Real-time alerts',    d: 'Instant notifications for what matters.' },
              ].map((x) => {
                const Icon = x.icon;
                return (
                  <div key={x.t} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-navy-700 dark:text-navy-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{x.t}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{x.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="card p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <School className="w-5 h-5 text-navy-700 dark:text-navy-300" />
                <p className="font-semibold text-slate-900 dark:text-white">{SCHOOL.name}</p>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  { l: 'Total Students',   v: '1,240+' },
                  { l: 'Faculty Members',  v: '86' },
                  { l: 'Classes Offered',  v: 'Pre-K to XII' },
                  { l: 'Avg. Attendance',  v: '94.2%' },
                ].map((s) => (
                  <div key={s.l} className="flex items-center justify-between py-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{s.l}</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center font-bold text-sm">BF</div>
              <div>
                <p className="text-sm font-bold text-white">BFPS</p>
                <p className="text-[10px] text-slate-400 tracking-wider">PARENTS PLATFORM</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-md">
              {SCHOOL.tagline}. A connected community of learners, educators and families.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Contact</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {SCHOOL.address}<br />
              {SCHOOL.phone}<br />
              {SCHOOL.email}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Portal</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/login" className="hover:text-white">Forgot Password</Link></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 {SCHOOL.name}. All rights reserved.</p>
          <p className="text-xs text-slate-500">Demo Portal — Not for production use</p>
        </div>
      </footer>
    </div>
  );
        }
