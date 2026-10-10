import { Link } from 'react-router-dom';
import {
  Trophy, MapPin, Phone, Mail, Code, Award, ArrowLeft, Star,
} from 'lucide-react';
import { SCHOOL, CREDITS, LEADERSHIP, SPORTS } from '../data/demoData';
import Badge from '../components/ui/Badge';

export default function AboutSchool() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-orange-700 dark:hover:text-white">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <Badge tone="warning">About Us</Badge>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">

        {/* School Hero */}
        <div className="card p-8 text-center">
          <div className="inline-flex w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 text-white items-center justify-center mb-4 shadow-lg">
            <Star className="w-10 h-10 fill-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {SCHOOL.name}
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Established {SCHOOL.established} · {SCHOOL.board} Affiliated
          </p>
          <p className="text-xs text-slate-400 mt-1">Under {SCHOOL.trust}</p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5 text-sm text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {SCHOOL.address}
            </span>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Our Leadership</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Director */}
            <div className="card p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {LEADERSHIP.director.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900 dark:text-white">
                {LEADERSHIP.director.name}
              </h3>
              <p className="text-sm text-orange-700 dark:text-orange-400 font-medium">
                {LEADERSHIP.director.role}
              </p>
            </div>

            {/* Principal — BLANK */}
            <div className="card p-6 text-center border-dashed border-2">
              <div className="w-24 h-24 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-3xl">
                ?
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-500 dark:text-slate-400">
                Principal
              </h3>
              <p className="text-sm text-slate-400 italic">
                Currently Vacant
              </p>
            </div>

            {/* Accountant */}
            <div className="card p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {LEADERSHIP.accountant.name.replace('Mr. ', '').split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900 dark:text-white">
                {LEADERSHIP.accountant.name}
              </h3>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                {LEADERSHIP.accountant.role}
              </p>
            </div>

            {/* Admin */}
            <div className="card p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {LEADERSHIP.admin.name.replace('Mr. ', '').split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900 dark:text-white">
                {LEADERSHIP.admin.name}
              </h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-400 font-medium">
                {LEADERSHIP.admin.role}
              </p>
            </div>
          </div>
        </div>

        {/* Developer Credits */}
        <div className="card p-6 sm:p-8 bg-gradient-to-br from-orange-50 to-white dark:from-slate-900 dark:to-slate-900/40 border border-orange-100 dark:border-orange-500/20">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-wider text-orange-700 dark:text-orange-400 uppercase">
              About This Platform
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
              A Digital School Portal
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              This modern School Management Platform has been designed and developed as a professional digital solution for the school community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Developer */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4 text-orange-700 dark:text-orange-400" />
                <span className="text-xs font-semibold text-orange-700 dark:text-orange-400 uppercase tracking-wide">
                  Developed By
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center font-bold shrink-0">
                  {CREDITS.developer.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white truncate">
                    {CREDITS.developer.name}
                  </p>
                  <p className="text-xs text-slate-500">{CREDITS.developer.grade}</p>
                  <p className="text-xs text-orange-700 dark:text-orange-400 font-medium">
                    {CREDITS.developer.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Guide */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                  Guided By
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold shrink-0">
                  {CREDITS.guide.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white truncate">
                    {CREDITS.guide.name}
                  </p>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                    {CREDITS.guide.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            This platform is a proprietary digital product of{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-300">{CREDITS.school}</span>.
            Available for licensing to other institutions.
          </p>
        </div>

        {/* Sports Facilities */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <Trophy className="w-5 h-5 text-orange-600" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Sports Facilities</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {SPORTS.map((s) => (
              <div key={s.name} className="card p-5 text-center hover:shadow-card-hover transition-all">
                <div className="text-4xl mb-2">{s.icon}</div>
                <p className="font-semibold text-slate-900 dark:text-white">{s.name}</p>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">{s.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Contact Us</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-orange-700 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Address</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-1 leading-relaxed">{SCHOOL.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-1">{SCHOOL.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-700 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Email</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-1 break-all">{SCHOOL.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 pb-2 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500">
            © 2026 {SCHOOL.name} · All Rights Reserved
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Developed by <span className="font-semibold text-slate-600 dark:text-slate-300">{CREDITS.developer.name}</span> ·
            Guided by <span className="font-semibold text-slate-600 dark:text-slate-300">{CREDITS.guide.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
              }
