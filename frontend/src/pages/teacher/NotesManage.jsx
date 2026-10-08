import { useState } from 'react';
import { NOTES, SUBJECTS } from '../../data/demoData';
import Modal from '../../components/ui/Modal';
import { Plus, Upload, Download, Eye, FileType } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { api } from '../../services/api';

const typeColor = { PDF: 'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400', DOCX: 'bg-navy-50 text-navy-700', PPTX: 'bg-amber-50 text-amber-700' };

export default function NotesManage() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(NOTES);
  const [form, setForm] = useState({ subject: 'Mathematics', chapter: '', title: '', file: null });
  const { push } = useToast();

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.chapter) { push('Please fill required fields.', 'error'); return; }
    const res = await api.uploadNote({
      ...form,
      teacher: 'Dr. Ananya Sharma',
      uploadDate: new Date().toISOString().split('T')[0],
      type: form.file?.name?.split('.').pop()?.toUpperCase() || 'PDF',
      size: form.file ? `${(form.file.size / 1024 / 1024).toFixed(1)} MB` : '1.0 MB',
    });
    setList([res.note, ...list]);
    setOpen(false);
    push('Study material uploaded.', 'success');
    setForm({ subject: 'Mathematics', chapter: '', title: '', file: null });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Notes & Study Material</h1>
          <p className="text-sm text-slate-500 mt-1">Upload and manage resources for your students</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary"><Plus className="w-4 h-4" />Upload Material</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((n) => (
          <div key={n.id} className="card p-5">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 flex items-center justify-center">
                <FileType className="w-5 h-5" />
              </div>
              <span className={`badge ${typeColor[n.type] || typeColor.PDF}`}>{n.type}</span>
            </div>
            <p className="text-xs font-medium text-navy-700 dark:text-navy-300 mt-3">{n.subject} · {n.chapter}</p>
            <h3 className="font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2">{n.title}</h3>
            <p className="text-xs text-slate-500 mt-2">Uploaded {n.uploadDate} · {n.size}</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => push('View (demo)', 'info')} className="btn-secondary flex-1 text-xs py-2"><Eye className="w-3.5 h-3.5" />View</button>
              <button onClick={() => push('Download (demo)', 'info')} className="btn-primary flex-1 text-xs py-2"><Download className="w-3.5 h-3.5" />Download</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Upload Study Material">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="label">Subject</label>
            <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input">
              {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Chapter *</label>
            <input value={form.chapter} onChange={(e) => setForm({ ...form, chapter: e.target.value })} className="input" placeholder="e.g., Chapter 4" />
          </div>
          <div>
            <label className="label">Title *</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" placeholder="e.g., Quadratic Equations — Full Notes" />
          </div>
          <div>
            <label className="label">File</label>
            <input type="file" onChange={(e) => setForm({ ...form, file: e.target.files?.[0] })} className="input file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-navy-50 dark:file:bg-navy-500/10 file:text-navy-700 dark:file:text-navy-300 file:text-sm file:font-medium" />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" className="btn-primary flex-1"><Upload className="w-4 h-4" />Upload</button>
            <button type="button" onClick={() => setOpen(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
