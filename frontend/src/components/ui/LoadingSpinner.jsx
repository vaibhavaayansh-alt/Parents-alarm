export default function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-slate-500">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-navy-700 animate-spin" />
      <p className="mt-4 text-sm">{label}</p>
    </div>
  );
}
