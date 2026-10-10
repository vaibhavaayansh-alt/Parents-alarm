import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import AboutSchool from './pages/AboutSchool';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';

import StudentDashboard from './pages/student/Dashboard';
import Profile from './pages/student/Profile';
import Marksheet from './pages/student/Marksheet';
import Attendance from './pages/student/Attendance';
import Homework from './pages/student/Homework';
import Notes from './pages/student/Notes';
import Notices from './pages/student/Notices';
import Teachers from './pages/student/Teachers';
import Fees from './pages/student/Fees';
import Timetable from './pages/student/Timetable';
import Exams from './pages/student/Exams';
import Events from './pages/student/Events';
import Settings from './pages/shared/Settings';
import NotificationsPage from './pages/shared/NotificationsPage';

import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherClasses from './pages/teacher/Classes';
import TeacherAttendance from './pages/teacher/AttendanceManage';
import TeacherHomework from './pages/teacher/HomeworkManage';
import TeacherNotes from './pages/teacher/NotesManage';

import PrincipalDashboard from './pages/principal/Dashboard';
import DirectorDashboard from './pages/director/Dashboard';
import AccountantDashboard from './pages/accountant/Dashboard';
import StaffDirectory from './pages/shared/StaffDirectory';
import StudentDirectory from './pages/shared/StudentDirectory';

// ─────────────────────────────────────────
// Sidebar nav items per role
// ─────────────────────────────────────────
const STUDENT_NAV = [
  { to: '/student', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/profile', label: 'My Profile', icon: 'User' },
  { to: '/marksheet', label: 'Marksheet', icon: 'GraduationCap' },
  { to: '/attendance', label: 'Attendance', icon: 'CalendarCheck' },
  { to: '/homework', label: 'Homework', icon: 'BookOpen' },
  { to: '/notes', label: 'Notes & Material', icon: 'FileText' },
  { to: '/notices', label: 'Notice Board', icon: 'Bell' },
  { to: '/timetable', label: 'Timetable', icon: 'CalendarDays' },
  { to: '/exams', label: 'Examinations', icon: 'ClipboardList' },
  { to: '/events', label: 'Events', icon: 'PartyPopper' },
  { to: '/teachers', label: 'Teachers', icon: 'Users' },
  { to: '/fees', label: 'Fees & Accounts', icon: 'Wallet' },
];

const TEACHER_NAV = [
  { to: '/teacher', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/teacher/classes', label: 'My Classes', icon: 'BookOpen' },
  { to: '/teacher/students', label: 'Students', icon: 'Users' },
  { to: '/teacher/attendance', label: 'Attendance', icon: 'CalendarCheck' },
  { to: '/teacher/homework', label: 'Homework', icon: 'ClipboardList' },
  { to: '/teacher/notes', label: 'Notes & Material', icon: 'FileText' },
  { to: '/notices', label: 'Notices', icon: 'Bell' },
  { to: '/profile', label: 'My Profile', icon: 'User' },
];

const PRINCIPAL_NAV = [
  { to: '/principal', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/students', label: 'Students', icon: 'Users' },
  { to: '/staff', label: 'Staff Directory', icon: 'Briefcase' },
  { to: '/notices', label: 'Notices', icon: 'Bell' },
  { to: '/exams', label: 'Examinations', icon: 'ClipboardList' },
  { to: '/events', label: 'Events', icon: 'PartyPopper' },
  { to: '/attendance', label: 'Attendance', icon: 'CalendarCheck' },
  { to: '/profile', label: 'My Profile', icon: 'User' },
];

const DIRECTOR_NAV = [
  { to: '/director', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/students', label: 'Students', icon: 'Users' },
  { to: '/staff', label: 'Staff', icon: 'Briefcase' },
  { to: '/fees', label: 'Fees & Accounts', icon: 'Wallet' },
  { to: '/notices', label: 'Notices', icon: 'Bell' },
  { to: '/events', label: 'Events', icon: 'PartyPopper' },
  { to: '/profile', label: 'My Profile', icon: 'User' },
];

const ACCOUNTANT_NAV = [
  { to: '/accountant', label: 'Dashboard', icon: 'LayoutDashboard', end: true },
  { to: '/fees', label: 'Fees & Accounts', icon: 'Wallet' },
  { to: '/students', label: 'Students', icon: 'Users' },
  { to: '/notices', label: 'Notices', icon: 'Bell' },
  { to: '/profile', label: 'My Profile', icon: 'User' },
];

export default function App() {
  return (
    <Routes>
      {/* ───────── PUBLIC ROUTES ───────── */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-school" element={<AboutSchool />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* ───────── STUDENT / PARENT ───────── */}
      <Route element={<ProtectedRoute allow={['STUDENT_PARENT']}><DashboardLayout navItems={STUDENT_NAV} title="Student Dashboard" /></ProtectedRoute>}>
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/marksheet" element={<Marksheet />} />
        <Route path="/student/attendance" element={<Attendance />} />
        <Route path="/student/homework" element={<Homework />} />
        <Route path="/student/notes" element={<Notes />} />
        <Route path="/student/notices" element={<Notices />} />
        <Route path="/student/timetable" element={<Timetable />} />
        <Route path="/student/exams" element={<Exams />} />
        <Route path="/student/events" element={<Events />} />
        <Route path="/student/teachers" element={<Teachers />} />
        <Route path="/student/fees" element={<Fees />} />
        <Route path="/student/settings" element={<Settings />} />
        <Route path="/student/notifications" element={<NotificationsPage />} />
      </Route>

      {/* Also allow short paths for student */}
      <Route element={<ProtectedRoute allow={['STUDENT_PARENT']}><DashboardLayout navItems={STUDENT_NAV} title="Student Dashboard" /></ProtectedRoute>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/marksheet" element={<Marksheet />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Route>

      {/* ───────── TEACHER ───────── */}
      <Route element={<ProtectedRoute allow={['TEACHER']}><DashboardLayout navItems={TEACHER_NAV} title="Teacher Dashboard" /></ProtectedRoute>}>
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<TeacherClasses />} />
        <Route path="/teacher/students" element={<StudentDirectory />} />
        <Route path="/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/teacher/homework" element={<TeacherHomework />} />
        <Route path="/teacher/notes" element={<TeacherNotes />} />
      </Route>

      {/* Teacher also needs profile, notices, settings, notifications */}
      <Route element={<ProtectedRoute allow={['TEACHER']}><DashboardLayout navItems={TEACHER_NAV} title="Teacher Dashboard" /></ProtectedRoute>}>
        <Route path="/teacher/profile" element={<Profile />} />
        <Route path="/teacher/notices" element={<Notices />} />
        <Route path="/teacher/settings" element={<Settings />} />
        <Route path="/teacher/notifications" element={<NotificationsPage />} />
      </Route>

      {/* ───────── PRINCIPAL ───────── */}
      <Route element={<ProtectedRoute allow={['PRINCIPAL']}><DashboardLayout navItems={PRINCIPAL_NAV} title="Principal Dashboard" /></ProtectedRoute>}>
        <Route path="/principal" element={<PrincipalDashboard />} />
        <Route path="/principal/students" element={<StudentDirectory />} />
        <Route path="/principal/staff" element={<StaffDirectory />} />
        <Route path="/principal/notices" element={<Notices />} />
        <Route path="/principal/exams" element={<Exams />} />
        <Route path="/principal/events" element={<Events />} />
        <Route path="/principal/attendance" element={<Attendance />} />
        <Route path="/principal/profile" element={<Profile />} />
        <Route path="/principal/settings" element={<Settings />} />
        <Route path="/principal/notifications" element={<NotificationsPage />} />
      </Route>

      {/* Principal also allow short paths */}
      <Route element={<ProtectedRoute allow={['PRINCIPAL']}><DashboardLayout navItems={PRINCIPAL_NAV} title="Principal Dashboard" /></ProtectedRoute>}>
        <Route path="/students" element={<StudentDirectory />} />
        <Route path="/staff" element={<StaffDirectory />} />
      </Route>

      {/* ───────── DIRECTOR ───────── */}
      <Route element={<ProtectedRoute allow={['DIRECTOR']}><DashboardLayout navItems={DIRECTOR_NAV} title="Director Dashboard" /></ProtectedRoute>}>
        <Route path="/director" element={<DirectorDashboard />} />
        <Route path="/director/students" element={<StudentDirectory />} />
        <Route path="/director/staff" element={<StaffDirectory />} />
        <Route path="/director/fees" element={<Fees />} />
        <Route path="/director/notices" element={<Notices />} />
        <Route path="/director/events" element={<Events />} />
        <Route path="/director/profile" element={<Profile />} />
        <Route path="/director/settings" element={<Settings />} />
        <Route path="/director/notifications" element={<NotificationsPage />} />
      </Route>

      {/* ───────── ACCOUNTANT ───────── */}
      <Route element={<ProtectedRoute allow={['ACCOUNTANT']}><DashboardLayout navItems={ACCOUNTANT_NAV} title="Accounts Dashboard" /></ProtectedRoute>}>
        <Route path="/accountant" element={<AccountantDashboard />} />
        <Route path="/accountant/fees" element={<Fees />} />
        <Route path="/accountant/students" element={<StudentDirectory />} />
        <Route path="/accountant/notices" element={<Notices />} />
        <Route path="/accountant/profile" element={<Profile />} />
        <Route path="/accountant/settings" element={<Settings />} />
        <Route path="/accountant/notifications" element={<NotificationsPage />} />
      </Route>

      {/* ───────── FALLBACK ───────── */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
