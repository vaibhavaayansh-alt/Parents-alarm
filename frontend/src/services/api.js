import {
  DEMO_ACCOUNTS, STUDENT, DASHBOARD_STATS, TODAY_SCHEDULE, NOTICES,
  HOMEWORK, MARKS, NOTES, TEACHERS, STAFF, STUDENTS, FEES,
  TEACHER_CLASSES, TIMETABLE, UPCOMING_EXAMS, EVENTS, NOTIFICATIONS,
  ATTENDANCE_MONTH, ATTENDANCE_SUMMARY, SUBJECTS, SCHOOL,
} from '../data/demoData';

const USE_REAL_API = false;
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const delay = (ms = 250) => new Promise((r) => setTimeout(r, ms));

async function http(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const api = {
  async login({ role, id, password }) {
    if (USE_REAL_API) return http('/auth/login', { method: 'POST', body: JSON.stringify({ role, id, password }) });
    await delay(600);
    const key = role.toLowerCase();
    const account = DEMO_ACCOUNTS[key];
    if (!account) return { success: false, error: 'Invalid role' };
    if (account.id !== id || account.password !== password)
      return { success: false, error: 'Invalid credentials. Please check your ID and password.' };
    return {
      success: true,
      user: { id: account.id, name: account.name, role: account.role, roleKey: key },
    };
  },

  async getDashboard() {
    await delay();
    return { stats: DASHBOARD_STATS, schedule: TODAY_SCHEDULE, notices: NOTICES.slice(0, 3), homework: HOMEWORK };
  },
  async getStudent() { await delay(); return STUDENT; },
  async getSubjects() { await delay(); return SUBJECTS; },
  async getMarks() { await delay(); return MARKS; },
  async getAttendance() { await delay(); return { month: ATTENDANCE_MONTH, summary: ATTENDANCE_SUMMARY, stats: STUDENT.attendance }; },
  async getHomework() { await delay(); return HOMEWORK; },
  async getNotes() { await delay(); return NOTES; },
  async getNotices() { await delay(); return NOTICES; },
  async getTeachers() { await delay(); return TEACHERS; },
  async getStaff() { await delay(); return STAFF; },
  async getStudents() { await delay(); return STUDENTS; },
  async getFees() { await delay(); return FEES; },
  async getTeacherClasses() { await delay(); return TEACHER_CLASSES; },
  async getTimetable() {
    await delay();
    return { timetable: TIMETABLE, times: ['08:00–08:45', '08:45–09:30', '09:45–10:30', '10:30–11:15', '11:30–12:15', '12:15–01:00'] };
  },
  async getExams() { await delay(); return UPCOMING_EXAMS; },
  async getEvents() { await delay(); return EVENTS; },
  async getNotifications() { await delay(); return NOTIFICATIONS; },
  async getSchool() { return SCHOOL; },

  async saveAttendance(records) { await delay(400); return { success: true, count: records.length }; },
  async createHomework(hw) { await delay(400); return { success: true, homework: { id: Date.now(), ...hw } }; },
  async uploadNote(note) { await delay(400); return { success: true, note: { id: Date.now(), ...note } }; },
  async publishNotice(notice) { await delay(400); return { success: true, notice: { id: Date.now(), ...notice } }; },
};
