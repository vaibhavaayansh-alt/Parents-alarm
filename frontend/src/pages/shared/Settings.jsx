import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { User, KeyRound, Bell, Palette, Globe, Save } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';

const TABS = [
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'password', label: 'Password', icon: KeyRound },
  { key: 'notifications', label: 'Notifications', icon: Bell },
  { key: 'theme', label: 'Theme', icon: Palette },
  { key: 'language', label: 'Language', icon: Globe },
];

export default function Settings() {
  const [params, setParams] = useSearchParams();
  const [tab, setTab] = useState(params.get('tab') || 'profile');
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { push } = useToast();

  const [prefs, setPrefs] = useState({ homework: true, notices: true, attendance: true, fee: true, events: false });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-sm text-slate-500 mt-1">Manage your account preferences</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <div className="card p-2 lg:col-span-1 h-max">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.key;
            return (
              <button key={t.key}
                onClick={() => { setTab(t.key); setParams({ tab: t.key }); }}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition ${
                  active ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}>
                <Icon className="w-4 h-4" />{t.label}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-3 card p-5 sm:p-6">
          {tab === 'profile' && (
            <>
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Profile</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="label">Full Name</label><input defaultValue={user?.name} className="input" /></div>
                <div><label className="label">Role</label><input defaultValue={user?.role?.replace('_', ' / ')} className="input" disabled /></div>
                <div><label className="label">User ID</label><input defaultValue={user?.id} className="input" disabled /></div>
                <div><label className="label">Email</label><input defaultValue="demo@bfps-example.edu.in" className="input" /></div>
              </div>
              <button onClick={() => push('Profile saved (demo).', 'success')} className="btn-primary mt-5"><Save className="w-4 h-4" />Save</button>
            </>
          )}

          {tab === 'password' && (
            <>
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Change Password</h2>
              <div className="space-y-4 max-w-md">
                <div><label className="label">Current Password</label><input type="password" className="input" /></div>
                <div><label className="label">New Password</label><input type="password" className="input" /></div>
                <div><label className="label">Confirm New Password</label><input type="password" className="input" /></div>
              </div>
              <button onClick={() => push('Password changed (demo).', 'success')} className="btn-primary mt-5"><Save className="w-4 h-4" />Update Password</button>
            </>
          )}

          {tab === 'notifications' && (
            <>
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Notification Preferences</h2>
              <div className="space-y-3 max-w-lg">
                {Object.entries(prefs).map(([k, v]) => (
                  <label key={k} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 cursor-pointer">
                    <span className="text-sm text-slate-700 dark:text-slate-200 capitalize">{k === 'fee' ? 'Fee Reminders' : k}</span>
                    <input type="checkbox" checked={v} onChange={(e) => setPrefs({ ...prefs, [k]: e.target.checked })}
                      className="w-5 h-5 rounded text-navy-700 focus:ring-navy-500" />
                  </label>
                ))}
              </div>
              <button onClick={() => push('Preferences saved.', 'success')} className="btn-primary mt-5"><Save className="w-4 h-4" />Save</button>
            </>
          )}

          {tab === 'theme' && (
            <>
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Theme</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
                {[
                  { k: 'light', label: 'Light', bg: 'bg-white', fg: 'bg-slate-200' },
                  { k: 'dark',  label: 'Dark',  bg: 'bg-slate-900', fg: 'bg-slate-700' },
                ].map((opt) => (
                  <button key={opt.k} onClick={() => { if (theme !== opt.k) toggleTheme(); }}
                    className={`rounded-2xl border-2 p-4 text-left transition ${theme === opt.k ? 'border-navy-600' : 'border-slate-200 dark:border-slate-800'}`}>
                    <div className={`rounded-xl ${opt.bg} h-20 p-3 space-y-2`}>
                      <div className={`h-2 rounded ${opt.fg} w-2/3`} />
                      <div className={`h-2 rounded ${opt.fg} w-1/2`} />
                      <div className={`h-2 rounded ${opt.fg} w-3/4`} />
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">{opt.label}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {tab === 'language' && (
            <>
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Language</h2>
              <div className="space-y-3 max-w-md">
                {[
                  { k: 'en', label: 'English', desc: 'Default language' },
                  { k: 'hi', label: 'हिंदी (Hindi)', desc: 'Coming soon' },
                ].map((l) => (
                  <label key={l.k} className={`flex items-center gap-3 p-3.5 rounded-xl border ${l.k === 'en' ? 'border-navy-500 bg-navy-50 dark:bg-navy-500/10' : 'border-slate-200 dark:border-slate-800 opacity-60'}`}>
                    <input type="radio" name="lang" defaultChecked={l.k === 'en'} disabled={l.k !== 'en'} className="w-4 h-4 text-navy-700 focus:ring-navy-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{l.label}</p>
                      <p className="text-xs text-slate-500">{l.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
                    }
