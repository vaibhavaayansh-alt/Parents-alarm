import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
      <div className="card p-10 text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-navy-50 dark:bg-navy-500/10 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 text-navy-700 dark:text-navy-300" />
        </div>
        <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h1>
        <p className="mt-2 text-sm text-slate-500">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">Back to Home</Link>
      </div>
    </div>
  );
}
