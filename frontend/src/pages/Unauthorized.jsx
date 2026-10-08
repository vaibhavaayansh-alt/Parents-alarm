import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
      <div className="card p-10 text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8 text-rose-600 dark:text-rose-400" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Access Denied</h1>
        <p className="mt-2 text-sm text-slate-500">Your role does not have permission to view this page.</p>
        <Link to="/login" className="btn-primary mt-6 inline-flex">Back to Login</Link>
      </div>
    </div>
  );
}
