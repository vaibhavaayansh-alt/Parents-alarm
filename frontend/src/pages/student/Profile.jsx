import { useState } from 'react';
import { STUDENT, SCHOOL } from '../../data/demoData';
import { User, Users, GraduationCap, Pencil, Save, X } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

function Row({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-900 dark:text-white sm:text-right">{value}</span>
    </div>
  );
}

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [contact, setContact] = useState(STUDENT.contact);
  const [email, setEmail] = useState(STUDENT.email);
  const [emergency, setEmergency] = useState(STUDENT.emergency);
  const { push } = useToast();

  const save = () => {
    setEditing(false);
    push('Profile updated successfully.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="card p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 text-white flex items-center justify-center text-2xl font-bold shrink-0">
            {STUDENT.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">{STUDENT.name}</h1>
            <p className="text-sm text-slate-500 mt-0.5">Class {STUDENT.class}-{STUDENT.section} · Roll No. {STUDENT.rollNo}</p>
            <p className="text-xs text-slate-500 mt-1">Admission No: {STUDENT.admissionNo}</p>
          </div>
          <button onClick={() => setEditing(true)} className="btn-secondary">
            <Pencil className="w-4 h-4" />Edit Profile
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Section icon={User} title="Student Information">
          <Row label="Full Name" value={STUDENT.name} />
          <Row label="Student ID" value={STUDENT.id} />
          <Row label="Admission Number" value={STUDENT.admissionNo} />
          <Row label="Class" value={STUDENT.class} />
          <Row label="Section" value={STUDENT.section} />
          <Row label="Roll Number" value={STUDENT.rollNo} />
          <Row label="Date of Birth" value={STUDENT.dob} />
          <Row label="School" value={SCHOOL.name} />
          <Row label="Academic Session" value={STUDENT.academicSession} />
          <Row label="Class Teacher" value={STUDENT.classTeacher} />
        </Section>

        <Section icon={Users} title="Parent / Guardian Information">
          {editing ? (
            <>
              <Row label="Father's / Guardian's Name" value={STUDENT.father} />
              <Row label="Mother's / Guardian's Name" value={STUDENT.mother} />
              <EditRow label="Contact Number" value={contact} setValue={setContact} />
              <EditRow label="Email" value={email} setValue={setEmail} />
              <EditRow label="Emergency Contact" value={emergency} setValue={setEmergency} />
              <div className="flex gap-2 pt-4">
                <button onClick={save} className="btn-primary flex-1"><Save className="w-4 h-4" />Save Changes</button>
                <button onClick={() => setEditing(false)} className="btn-secondary"><X className="w-4 h-4" />Cancel</button>
              </div>
            </>
          ) : (
            <>
              <Row label="Father's / Guardian's Name" value={STUDENT.father} />
              <Row label="Mother's / Guardian's Name" value={STUDENT.mother} />
              <Row label="Contact Number" value={contact} />
              <Row label="Email" value={email} />
              <Row label="Emergency Contact" value={emergency} />
            </>
          )}
        </Section>
      </div>

      <Section icon={GraduationCap} title="Academic Information">
        <Row label="Class Teacher" value={STUDENT.classTeacher} />
        <Row label="House" value={STUDENT.house} />
        <Row label="Bus Route" value={STUDENT.busRoute} />
        <Row label="Admission Date" value={STUDENT.admissionDate} />
      </Section>
    </div>
  );
}

function Section({ icon: Icon, title, children }) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-lg bg-navy-50 dark:bg-navy-500/10 text-navy-700 dark:text-navy-300 flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="font-semibold text-slate-900 dark:text-white">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

function EditRow({ label, value, setValue }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2.5 border-b border-slate-100 dark:border-slate-800">
      <span className="text-sm text-slate-500">{label}</span>
      <input value={value} onChange={(e) => setValue(e.target.value)} className="input sm:max-w-[240px]" />
    </div>
  );
}
