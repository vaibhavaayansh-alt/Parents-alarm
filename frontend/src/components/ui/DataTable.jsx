export default function DataTable({ columns, rows, empty = 'No records found.' }) {
  if (!rows?.length) return <div className="card p-8 text-center text-slate-500 text-sm">{empty}</div>;
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/60">
            <tr>
              {columns.map((c) => (
                <th key={c.key} className="text-left px-4 py-3 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition">
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-slate-700 dark:text-slate-200 whitespace-nowrap">
                    {c.render ? c.render(row[c.key], row) : row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
