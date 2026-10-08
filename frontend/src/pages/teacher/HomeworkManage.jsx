import { useState } from 'react';
import { HOMEWORK, SUBJECTS } from '../../data/demoData';
import HomeworkCard from '../../components/cards/HomeworkCard';
import Modal from '../../components/ui/Modal';
import { Plus, Send } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { api } from '../../services/api';

export default function HomeworkManage() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(HOMEWORK);
  const { push } = useToast();

  const [form, setForm] = useState({
    class: 'VIII', section: 'A', subject: 'Mathematics',
    title: '', description: '',
    assignedDate: new Date().toISOString().split('T')[0],
    dueDate: '', file: null,
  });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description || !form.dueDate) {
      push('Please fill all required fields.', 'error');
      return;
    }
    const res = await api.createHomework({ ...form, teacher: 'Dr. Ananya Sharma', status: 'Pending' });
    setList([res.homework, ...list]);
    setOpen(false);
    push('Homework published successfully.', 'success');
    setForm({ class: 'VIII', section: 'A', subject: 'Mathematics', title: '', description: '', assignedDate: new Date().toISOString().split('T')[0], dueDate: '', file: null });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Homework Management</h1>
          <p className="text-sm text-slate-500 mt-1">Create, assign and track homework</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary"><Plus className="w-4 h-4" />Assign Homework</button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((h) => <HomeworkCard key={h.id} hw={h} />)}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Assign New Homework" size="lg">
        <form onSubmit={submit} className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            <div>
              <label className="label">Class</label>
              <select value={form.class} onChange={(e) => setForm({ ...form, class: e.target.value })} className="input">
                {['VI', 'VII', 'VIII', 'IX', 'X'].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Section</label>
              <select value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })} className="input">
                {['A', 'B', 'C'].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="label">Subject</label>
              <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input">
                {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="label">Title *</label>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" placeholder="e.g., Exercise 4.3 — Quadratic Equations" />
          </div>
          <div>
            <label className="label">Description *</label>
            <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} className="input resize-none" placeholder="Describe the assignment..." />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="label">Assigned Date</label>
              <input type="date" value={form.assignedDate} onChange={(e) => setForm({ ...form, assignedDate: e.target.value })} className="input" />
            </div>
            <div>
              <label className="label">Due Date *</label>
              <input type="date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} className="input" />
            </div>
          </div>
          <div>
            <label className="label">Attach File (optional)</label>
            <input type="file" onChange={(e) => setForm({ ...form, file: e.target.files?.[0] })} className="input file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-navy-50 dark:file:bg-navy-500/10 file:text-navy-700 dark:file:text-navy-300 file:text-sm file:font-medium" />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" className="btn-primary flex-1"><Send className="w-4 h-4" />Publish Homework</button>
            <button type="button" onClick={() => setOpen(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
