import { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import NotificationPanel from '../components/layout/NotificationPanel';
import { SCHOOL, CREDITS } from '../data/demoData';
import { api } from '../services/api';
import { useApi } from '../hooks/useApi';

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center font-bold text-[10px] shadow-sm shrink-0">
        SFS
      </div>
      {!compact && (
        <div className="leading-tight min-w-0">
          <p className="text-sm font-bold text-slate-900 dark:text-white">SFS</p>
          <p className="text-[10px] text-slate-500 tracking-wide">PARENTS PLATFORM</p>
        </div>
      )}
    </div>
  );
}

export default function DashboardLayout({ navItems, title }) {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { push } = useToast();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { data: notifications } = useApi(() => api.getNotifications());
  const unread = notifications?.filter((n) => n.unread).length || 0;

  const handleLogout = () => {
    logout();
    push('You have been logged out.', 'success');
    navigate('/login');
  };

  const SidebarContent = () => (
    <>
      <div className="p-5 border-b border-slate-200 dark:border-slate-800">
        <Logo />
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = Icons[item.icon] || Icons.Circle;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              <Icon className="w-[18px] h-[18px] shrink-0" />
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
      <div className="p-3 border-t border-slate-200 dark:border-slate-800">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-xs font-semibold shrink-0">
            {user?.name?.split(' ').map((n) => n[0]).slice(0, 2).join('') || 'U'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">{user?.name}</p>
            <p className="text-[10px] text-slate-500 truncate">{user?.role?.replace('_', ' / ')}</p>
          </div>
          <button onClick={handleLogout} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-white dark:hover:bg-slate-700" title="Logout">
            <Icons.LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-64 fixed inset-y-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-72 max-w-[85vw] bg-white dark:bg-slate-900 flex flex-col animate-slide-in">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 px-4 sm:px-6 h-16">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <Icons.Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white truncate flex-1">{title}</h1>

            <button onClick={toggleTheme} className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" title="Toggle theme">
              {theme === 'dark' ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => setNotifOpen((v) => !v)} className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Icons.Bell className="w-5 h-5" />
              {unread > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-semibold">
                  {unread}
                </span>
              )}
            </button>

            <div className="relative">
              <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white flex items-center justify-center text-xs font-semibold">
                  {user?.name?.split(' ').map((n) => n[0]).slice(0, 2).join('') || 'U'}
                </div>
              </button>
              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 card p-1.5 z-20 animate-fade-in">
                    <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                      <p className="text-sm font-semibold truncate">{user?.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user?.role?.replace('_', ' / ')}</p>
                    </div>
                    {[
                      { to: '/profile', label: 'My Profile', icon: 'User' },
                      { to: '/settings', label: 'Settings', icon: 'Settings' },
                      { to: '/notifications', label: 'Notifications', icon: 'Bell' },
                      { to: '/settings?tab=password', label: 'Change Password', icon: 'KeyRound' },
                    ].map((item) => {
                      const Icon = Icons[item.icon];
                      return (
                        <Link key={item.label} to={item.to} onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                          <Icon className="w-4 h-4" />{item.label}
                        </Link>
                      );
                    })}
                    <button onClick={handleLogout} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                      <Icons.LogOut className="w-4 h-4" />Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 px-6 py-4 text-xs text-slate-500 text-center space-y-1">
          <p>© 2026 {SCHOOL.name} — Demo Portal</p>
          <p className="text-[10px]">
            Developed by <span className="font-semibold text-slate-600 dark:text-slate-400">{CREDITS.developer.name}</span> · Guided by <span className="font-semibold text-slate-600 dark:text-slate-400">{CREDITS.guide.name}</span>
          </p>
        </footer>
      </div>

      <NotificationPanel open={notifOpen} onClose={() => setNotifOpen(false)} notifications={notifications || []} />
    </div>
  );
}
