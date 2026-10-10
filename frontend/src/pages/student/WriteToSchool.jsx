import { useState } from 'react';
import { Send, MessageSquare, Clock, CheckCircle2, AlertCircle, Plus, X } from 'lucide-react';
import { WRITE_TO_SCHOOL } from '../../data/demoData';
import Badge from '../../components/ui/Badge';
import { useToast } from '../../context/ToastContext';
import Modal from '../../components/ui/Modal';

const TOPICS = [
  'Class Teacher',
  'Principal',
  'Administration',
  'Accounts',
  'Transport',
  'Academic Office',
];

const statusTone = {
  Replied: 'success',
  Pending: 'warning',
  Closed: 'neutral',
};

export default function WriteToSchool() {
  const [messages, setMessages] = useState(WRITE_TO_SCHOOL);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ to: 'Class Teacher', subject: '', message: '' });
  const { push } = useToast();

  const submit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.message) {
      push('Please fill both subject and message.', 'error');
      return;
    }
    const newMsg = {
      id: Date.now(),
      subject: form.subject,
      message: form.message,
      to: form.to,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      reply: null,
    };
    setMessages([newMsg, ...messages]);
    setOpen(false);
    setForm({ to: 'Class Teacher', subject: '', message: '' });
    push('Message sent to school successfully.', 'success');
  };

  const stats = [
    { label: 'Total Messages', value: messages.length, tone: 'navy', icon: MessageSquare },
    { label: 'Replied',        value: messages.filter((m) => m.status === 'Replied').length, tone: 'emerald', icon: CheckCircle2 },
    { label: 'Pending',        value: messages.filter((m) => m.status === 'Pending').length, tone: 'amber', icon: Clock },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Write To School</h1>
          <p className="text-sm text-slate-500 mt-1">Send messages directly to teachers & administration</p>
        </div>
        <button onClick={() => setOpen(true)} className="btn-primary bg-orange-600 hover:bg-orange-700">
          <Plus className="w-4 h-4" /> New Message
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          const tones = {
            navy: 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300',
            emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
            amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
          };
          return (
            <div key={s.label} className="card p-4 sm:p-5">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${tones[s.tone]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 mt-3">{s.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">{s.value}</p>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        {messages.map((m) => (
          <div key={m.id} className="card p-5 hover:shadow-card-hover transition">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Badge tone="info">To: {m.to}</Badge>
                  <Badge tone={statusTone[m.status]}>
                    {m.status === 'Replied' && <CheckCircle2 className="w-3 h-3" />}
                    {m.status === 'Pending' && <Clock className="w-3 h-3" />}
                    {m.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{m.subject}</h3>
                <p className="text-sm text-slate-500 mt-1.5">{m.message}</p>
                <p className="text-xs text-slate-400 mt-2">Sent on {m.date}</p>
              </div>
            </div>

            {m.reply && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Reply</span>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-200">{m.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="New Message to School" size="lg">
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="label">To</label>
            <select value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} className="input">
              {TOPICS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Subject *</label>
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="input"
              placeholder="e.g., Leave Application"
            />
          </div>
          <div>
            <label className="label">Message *</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="input resize-none"
              placeholder="Write your message..."
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button type="submit" className="btn-primary flex-1 bg-orange-600 hover:bg-orange-700">
              <Send className="w-4 h-4" /> Send Message
            </button>
            <button type="button" onClick={() => setOpen(false)} className="btn-secondary">Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
                                        }
