import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, ArrowLeft, GraduationCap, Users, Crown, Calculator, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { DEMO_ACCOUNTS } from '../data/demoData';

const ROLES = [
  { key: 'student',    label: 'Student / Parent', icon: Users,         idLabel: 'Admission Number' },
  { key: 'teacher',    label: 'Teacher',          icon: GraduationCap, idLabel: 'Teacher ID' },
  { key: 'principal',  label: 'Principal',        icon: Crown,         idLabel: 'Principal ID' },
  { key: 'director',   label: 'Director',         icon: Shield,        idLabel: 'Director ID' },
  { key: 'accountant', label: 'Accountant',       icon: Calculator,    idLabel: 'Accountant ID' },
];

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { push } = useToast();

  const [role, setRole] = useState('student');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const activeRole = ROLES.find((r) => r.key === role);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!id || !password) { setError('Please enter both ID and password.'); return; }
    setLoading(true);
    const res = await login(role, id.trim(), password, remember);
    setLoading(false);
    if (res.success) {
      push(`Welcome back, ${res.user.name}!`, 'success');
      const rk = res.user.roleKey;
      if (rk === 'student') navigate('/student');
      else if (rk === 'teacher') navigate('/teacher');
      else if (rk === 'principal') navigate('/principal');
      else if (rk === 'director') navigate('/director');
      else if (rk === 'accountant') navigate('/accountant');
    } else {
      setError(res.error || 'Login failed.');
    }
  };

  const autofill = (r) => {
    setRole(r);
    const acct = DEMO_ACCOUNTS[r];
    if (acct) { setId(acct.id); setPassword(acct.password); }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-navy-400/10 blur-3xl" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div>
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center font-bold text-xl mb-6">BF</div>
            <h1 className="text-3xl font-bold leading-tight">Welcome to<br />Bright Future Public School</h1>
            <p className="mt-4 text-navy-100 leading-relaxed max-w-md">
              Your complete school portal — attendance, homework, marks, fees and notices, all in one secure place.
            </p>
            <div className="mt-10 space-y-4">
              {['Real-time academic tracking', 'Digital notices & circulars', 'Secure role-based access'].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-sm text-navy-100">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-navy-300">© 2026 Bright Future Public School · Demo</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white items-center justify-center font-bold mb-3">BF</div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">BFPS Parents Platform</h1>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Sign in to your account</h2>
            <p className="text-sm text-slate-500 mt-1.5">Select your role and enter your credentials</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {ROLES.map((r) => {
              const Icon = r.icon;
              const active = role === r.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => { setRole(r.key); setError(''); }}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-[11px] font-medium transition ${
                    active
                      ? 'border-navy-600 bg-navy-50 dark:bg-navy-500/10 text-navy-800 dark:text-navy-200 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-center leading-tight">{r.label.split(' / ')[0]}</span>
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">{activeRole.idLabel}</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="input pl-10"
                  placeholder={`Enter ${activeRole.idLabel.toLowerCase()}`}
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="label mb-0">Password</label>
                <button type="button" onClick={() => push('Password reset requires admin approval in demo mode.', 'info')} className="text-xs font-medium text-navy-700 dark:text-navy-300 hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pl-10 pr-11"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer select-none">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-navy-700 focus:ring-navy-500" />
              Remember me on this device
            </label>

            {error && (
              <div className="rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 px-3.5 py-2.5 text-sm text-rose-700 dark:text-rose-300">
                {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full py-3 text-base">
              {loading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Signing in...
                </>
              ) : `Sign in as ${activeRole.label}`}
            </button>
          </form>

          <div className="mt-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-3.5">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">Demo credentials — click to autofill:</p>
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(DEMO_ACCOUNTS).map(([key, acct]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => autofill(key)}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-navy-500 hover:text-navy-700 dark:hover:text-navy-300 transition"
                >
                  {acct.role.replace('_', ' / ')}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-2">Demo-only credentials. Not for production.</p>
          </div>

          <p className="text-center text-xs text-slate-500 mt-6">
            This is a demo portal. Do not use real credentials.
          </p>
        </div>
      </div>
    </div>
  );
            }
