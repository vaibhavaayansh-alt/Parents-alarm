export const SCHOOL = {
  name: 'Bright Future Public School',
  shortName: 'BFPS',
  tagline: 'Connect • Learn • Grow',
  address: '12 Knowledge Park, Sector 45, Demo City — 110001',
  phone: '+91 11 1234 5678',
  email: 'info@bfps-demo.edu.in',
  session: '2026–27',
};

export const DEMO_ACCOUNTS = {
  student:   { id: 'DEMO-2026-001', password: 'student123',   name: 'Aarav Sharma',        role: 'STUDENT_PARENT' },
  teacher:   { id: 'T-1001',        password: 'teacher123',   name: 'Dr. Ananya Sharma',   role: 'TEACHER' },
  principal: { id: 'P-001',         password: 'principal123', name: 'Mr. Rajesh Verma',    role: 'PRINCIPAL' },
  director:  { id: 'D-001',         password: 'director123',  name: 'Mrs. Kavita Malhotra',role: 'DIRECTOR' },
  accountant:{ id: 'A-001',         password: 'account123',   name: 'Mr. Suresh Patel',    role: 'ACCOUNTANT' },
};

export const STUDENT = {
  id: 'DEMO-2026-001',
  admissionNo: 'DEMO-2026-001',
  name: 'Aarav Sharma',
  class: 'VIII',
  section: 'A',
  rollNo: 12,
  dob: '2013-04-18',
  gender: 'Male',
  bloodGroup: 'O+',
  photo: null,
  house: 'Blue House',
  busRoute: 'Route 7 — Sector 45',
  admissionDate: '2022-04-01',
  academicSession: '2026–27',
  classTeacher: 'Dr. Ananya Sharma',
  father: 'Mr. Rohit Sharma',
  mother: 'Mrs. Neha Sharma',
  contact: '+91 98••• ••123',
  email: 'parent.sharma@example.com',
  emergency: '+91 98••• ••456',
  attendance: { workingDays: 142, present: 134, absent: 5, leave: 3, percentage: 94.4 },
  fees: { total: 84000, paid: 63000, pending: 21000, nextDue: '2026-11-10' },
};

export const DASHBOARD_STATS = [
  { key: 'attendance', label: 'Attendance',         value: '94.4%', sub: '134 / 142 days',  tone: 'emerald', icon: 'CalendarCheck' },
  { key: 'percentage', label: 'Current Percentage', value: '87.6%', sub: 'Aggregate score', tone: 'navy',    icon: 'TrendingUp' },
  { key: 'fees',       label: 'Pending Fees',       value: '₹21,000', sub: 'Due 10 Nov 2026', tone: 'amber',  icon: 'Wallet' },
  { key: 'homework',   label: "Today's Homework",   value: '4',     sub: '2 pending',       tone: 'indigo',  icon: 'BookOpen' },
  { key: 'notices',    label: 'New Notices',        value: '5',     sub: 'This week',       tone: 'rose',    icon: 'Bell' },
  { key: 'exams',      label: 'Upcoming Exams',     value: '3',     sub: 'Next: Maths',     tone: 'purple',  icon: 'ClipboardList' },
];

export const TODAY_SCHEDULE = [
  { period: 1, subject: 'Mathematics',    teacher: 'Mr. Vikram Singh',  time: '08:00 – 08:45' },
  { period: 2, subject: 'Science',        teacher: 'Dr. Ananya Sharma', time: '08:45 – 09:30' },
  { period: 3, subject: 'English',        teacher: 'Ms. Priya Nair',    time: '09:45 – 10:30' },
  { period: 4, subject: 'Hindi',          teacher: 'Mrs. Sunita Rao',   time: '10:30 – 11:15' },
  { period: 5, subject: 'Social Science', teacher: 'Mr. Arjun Mehta',   time: '11:30 – 12:15' },
  { period: 6, subject: 'Computer',       teacher: 'Ms. Riya Kapoor',   time: '12:15 – 01:00' },
];

export const NOTICES = [
  { id: 1, title: 'Annual Sports Day 2026', date: '2026-10-05', publishedBy: 'Principal Office', category: 'Sports', important: true,
    description: 'Annual Sports Day will be held on 25th November 2026. All students must register by 15th November.',
    full: 'The Annual Sports Day for the academic session 2026–27 will be held on 25th November 2026 at the school main ground. Students interested in participating must register with their class teachers by 15th November 2026. Events include athletics, team sports, and march-past. Parents are cordially invited.' },
  { id: 2, title: 'Half-Yearly Examination Schedule', date: '2026-10-03', publishedBy: 'Examination Cell', category: 'Examination', important: true,
    description: 'Datesheet for Half-Yearly exams released. Exams begin 20th November 2026.',
    full: 'The Half-Yearly Examination will commence from 20th November 2026. The detailed datesheet has been uploaded to the student portal. Students must carry their admit cards. Syllabus has been shared by respective subject teachers.' },
  { id: 3, title: 'Diwali Break Announcement', date: '2026-10-01', publishedBy: 'Principal Office', category: 'Holiday', important: false,
    description: 'School will remain closed from 10th to 15th November 2026 for Diwali.',
    full: 'The school will remain closed from 10th November to 15th November 2026 on account of Diwali break. School reopens on 16th November 2026 (Monday). We wish all families a joyful and safe festival.' },
  { id: 4, title: 'Parent-Teacher Meeting', date: '2026-09-28', publishedBy: 'Academic Office', category: 'Event', important: false,
    description: 'PTM scheduled for 12th October 2026 from 9:00 AM to 1:00 PM.',
    full: 'A Parent-Teacher Meeting has been scheduled for 12th October 2026 from 9:00 AM to 1:00 PM. Parents are requested to attend and discuss their child\'s progress with respective teachers.' },
  { id: 5, title: 'Inter-House Quiz Competition', date: '2026-09-25', publishedBy: 'Cultural Committee', category: 'Competition', important: false,
    description: 'Inter-house quiz competition on 18th October 2026. Register with house captains.',
    full: 'The Inter-House Quiz Competition will be held on 18th October 2026. Interested students from classes VI to X should register with their respective house captains before 10th October.' },
];

export const HOMEWORK = [
  { id: 1, subject: 'Mathematics',    title: 'Quadratic Equations — Exercise 4.3', description: 'Solve all problems from Exercise 4.3, pages 82–84.', assignedDate: '2026-10-06', dueDate: '2026-10-09', teacher: 'Mr. Vikram Singh',  status: 'Pending' },
  { id: 2, subject: 'Science',        title: 'Chapter 5: Cell Structure — Diagrams', description: 'Draw and label plant cell and animal cell diagrams.', assignedDate: '2026-10-06', dueDate: '2026-10-08', teacher: 'Dr. Ananya Sharma', status: 'Submitted' },
  { id: 3, subject: 'English',        title: 'Essay: My Vision for India 2047',     description: 'Write a 300-word essay. Submit handwritten.', assignedDate: '2026-10-04', dueDate: '2026-10-07', teacher: 'Ms. Priya Nair',    status: 'Overdue' },
  { id: 4, subject: 'Hindi',          title: 'व्याकरण — संधि अभ्यास',                description: 'Complete sandhi exercises from page 45.', assignedDate: '2026-10-05', dueDate: '2026-10-10', teacher: 'Mrs. Sunita Rao',   status: 'Pending' },
  { id: 5, subject: 'Social Science', title: 'Map Work: Resources of India',        description: 'Mark major mineral resources on India outline map.', assignedDate: '2026-10-03', dueDate: '2026-10-07', teacher: 'Mr. Arjun Mehta',   status: 'Completed' },
  { id: 6, subject: 'Computer',       title: 'HTML Basics — Build a Web Page',      description: 'Create a simple HTML page about your hobby.', assignedDate: '2026-10-02', dueDate: '2026-10-08', teacher: 'Ms. Riya Kapoor',   status: 'Pending' },
  { id: 7, subject: 'Sanskrit',       title: 'श्लोक अभ्यास — Chapter 3',             description: 'Memorize shlokas 1–5 from chapter 3.', assignedDate: '2026-10-01', dueDate: '2026-10-06', teacher: 'Mr. Ramesh Iyer',   status: 'Overdue' },
];

export const SUBJECTS = ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer', 'Sanskrit'];

export const MARKS = {
  'Unit Test 1': [
    { subject: 'English', max: 25, obtained: 22 }, { subject: 'Hindi', max: 25, obtained: 20 },
    { subject: 'Mathematics', max: 25, obtained: 23 }, { subject: 'Science', max: 25, obtained: 24 },
    { subject: 'Social Science', max: 25, obtained: 21 }, { subject: 'Computer', max: 25, obtained: 25 },
    { subject: 'Sanskrit', max: 25, obtained: 19 },
  ],
  'Half-Yearly': [
    { subject: 'English', max: 80, obtained: 68 }, { subject: 'Hindi', max: 80, obtained: 65 },
    { subject: 'Mathematics', max: 80, obtained: 74 }, { subject: 'Science', max: 80, obtained: 72 },
    { subject: 'Social Science', max: 80, obtained: 66 }, { subject: 'Computer', max: 80, obtained: 78 },
    { subject: 'Sanskrit', max: 80, obtained: 62 },
  ],
  'Unit Test 2': [
    { subject: 'English', max: 25, obtained: 21 }, { subject: 'Hindi', max: 25, obtained: 19 },
    { subject: 'Mathematics', max: 25, obtained: 24 }, { subject: 'Science', max: 25, obtained: 22 },
    { subject: 'Social Science', max: 25, obtained: 20 }, { subject: 'Computer', max: 25, obtained: 25 },
    { subject: 'Sanskrit', max: 25, obtained: 18 },
  ],
  'Annual Examination': [
    { subject: 'English', max: 100, obtained: 84 }, { subject: 'Hindi', max: 100, obtained: 79 },
    { subject: 'Mathematics', max: 100, obtained: 92 }, { subject: 'Science', max: 100, obtained: 88 },
    { subject: 'Social Science', max: 100, obtained: 82 }, { subject: 'Computer', max: 100, obtained: 96 },
    { subject: 'Sanskrit', max: 100, obtained: 76 },
  ],
};

export const ATTENDANCE_MONTH = {
  month: 'October 2026',
  days: Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    const dow = new Date(2026, 9, day).getDay();
    if (dow === 0) return { day, status: 'Holiday' };
    if ([2, 10, 11, 12, 13, 14, 15].includes(day)) return { day, status: 'Holiday' };
    if ([4, 14].includes(day)) return { day, status: 'Absent' };
    if ([8].includes(day)) return { day, status: 'Leave' };
    if (day > 8) return { day, status: null };
    return { day, status: 'Present' };
  }),
};

export const ATTENDANCE_SUMMARY = [
  { month: 'April 2026',     working: 22, present: 22, absent: 0, leave: 0, percentage: 100 },
  { month: 'May 2026',       working: 20, present: 19, absent: 1, leave: 0, percentage: 95.0 },
  { month: 'June 2026',      working: 24, present: 22, absent: 1, leave: 1, percentage: 91.7 },
  { month: 'July 2026',      working: 25, present: 24, absent: 1, leave: 0, percentage: 96.0 },
  { month: 'August 2026',    working: 23, present: 21, absent: 1, leave: 1, percentage: 91.3 },
  { month: 'September 2026', working: 20, present: 19, absent: 1, leave: 0, percentage: 95.0 },
  { month: 'October 2026',   working: 8,  present: 7,  absent: 0, leave: 1, percentage: 87.5 },
];

export const NOTES = [
  { id: 1, subject: 'Mathematics',    chapter: 'Chapter 4', title: 'Quadratic Equations — Full Notes', teacher: 'Mr. Vikram Singh',  uploadDate: '2026-10-01', type: 'PDF',  size: '2.4 MB' },
  { id: 2, subject: 'Science',        chapter: 'Chapter 5', title: 'Cell — Structure and Functions',  teacher: 'Dr. Ananya Sharma', uploadDate: '2026-09-28', type: 'PDF',  size: '3.1 MB' },
  { id: 3, subject: 'English',        chapter: 'Unit 2',    title: 'Grammar: Tenses & Voice',          teacher: 'Ms. Priya Nair',    uploadDate: '2026-09-25', type: 'DOCX', size: '1.2 MB' },
  { id: 4, subject: 'Hindi',          chapter: 'पाठ 3',      title: 'संधि एवं समास — नोट्स',             teacher: 'Mrs. Sunita Rao',   uploadDate: '2026-09-22', type: 'PDF',  size: '1.8 MB' },
  { id: 5, subject: 'Social Science', chapter: 'Chapter 3', title: 'Resources and Development',        teacher: 'Mr. Arjun Mehta',   uploadDate: '2026-09-20', type: 'PDF',  size: '4.2 MB' },
  { id: 6, subject: 'Computer',       chapter: 'Chapter 2', title: 'HTML & Web Basics',                teacher: 'Ms. Riya Kapoor',   uploadDate: '2026-09-18', type: 'PPTX', size: '5.6 MB' },
  { id: 7, subject: 'Sanskrit',       chapter: 'पाठ 3',      title: 'श्लोक संग्रह एवं अर्थ',             teacher: 'Mr. Ramesh Iyer',   uploadDate: '2026-09-15', type: 'PDF',  size: '1.1 MB' },
];

export const TEACHERS = [
  { id: 'T-1001', name: 'Dr. Ananya Sharma', designation: 'Senior Teacher',       subjects: ['Science'],         classTeacherOf: 'VIII-A', classes: ['VII', 'VIII', 'IX'], mobile: '+91 98••• ••101', email: 'ananya.sharma@bfps-demo.edu.in', department: 'Science',          avatar: 'AS' },
  { id: 'T-1002', name: 'Mr. Vikram Singh',  designation: 'PGT Mathematics',      subjects: ['Mathematics'],     classTeacherOf: 'IX-B',   classes: ['VIII', 'IX', 'X'],   mobile: '+91 98••• ••102', email: 'vikram.singh@bfps-demo.edu.in',  department: 'Mathematics',      avatar: 'VS' },
  { id: 'T-1003', name: 'Ms. Priya Nair',    designation: 'TGT English',          subjects: ['English'],         classTeacherOf: 'VII-C',  classes: ['VI', 'VII', 'VIII'], mobile: '+91 98••• ••103', email: 'priya.nair@bfps-demo.edu.in',    department: 'Languages',        avatar: 'PN' },
  { id: 'T-1004', name: 'Mrs. Sunita Rao',   designation: 'TGT Hindi',            subjects: ['Hindi'],           classTeacherOf: 'X-A',    classes: ['VII', 'VIII', 'X'],  mobile: '+91 98••• ••104', email: 'sunita.rao@bfps-demo.edu.in',    department: 'Languages',        avatar: 'SR' },
  { id: 'T-1005', name: 'Mr. Arjun Mehta',   designation: 'TGT Social Science',   subjects: ['Social Science'],  classTeacherOf: 'VI-B',   classes: ['VI', 'VII', 'VIII'], mobile: '+91 98••• ••105', email: 'arjun.mehta@bfps-demo.edu.in',   department: 'Social Science',   avatar: 'AM' },
  { id: 'T-1006', name: 'Ms. Riya Kapoor',   designation: 'Computer Faculty',     subjects: ['Computer'],        classTeacherOf: 'IX-A',   classes: ['VIII', 'IX', 'X'],   mobile: '+91 98••• ••106', email: 'riya.kapoor@bfps-demo.edu.in',   department: 'Computer Science', avatar: 'RK' },
  { id: 'T-1007', name: 'Mr. Ramesh Iyer',   designation: 'Sanskrit Teacher',     subjects: ['Sanskrit'],        classTeacherOf: '—',      classes: ['VI', 'VII', 'VIII'], mobile: '+91 98••• ••107', email: 'ramesh.iyer@bfps-demo.edu.in',   department: 'Languages',        avatar: 'RI' },
  { id: 'T-1008', name: 'Mrs. Meera Joshi',  designation: 'Primary Coordinator',  subjects: ['English', 'EVS'],  classTeacherOf: 'IV-A',   classes: ['III', 'IV', 'V'],    mobile: '+91 98••• ••108', email: 'meera.joshi@bfps-demo.edu.in',   department: 'Primary',          avatar: 'MJ' },
];

export const STAFF = [
  ...TEACHERS.map((t) => ({ ...t, category: 'Teachers' })),
  { id: 'P-001', name: 'Mr. Rajesh Verma',     designation: 'Principal',           department: 'Administration', mobile: '+91 98••• ••201', email: 'principal@bfps-demo.edu.in', category: 'Principal',            avatar: 'RV' },
  { id: 'D-001', name: 'Mrs. Kavita Malhotra', designation: 'Director',            department: 'Management',     mobile: '+91 98••• ••202', email: 'director@bfps-demo.edu.in',  category: 'Director',             avatar: 'KM' },
  { id: 'A-001', name: 'Mr. Suresh Patel',     designation: 'Senior Accountant',   department: 'Accounts',       mobile: '+91 98••• ••203', email: 'accounts@bfps-demo.edu.in',  category: 'Accountant',           avatar: 'SP' },
  { id: 'AD-01', name: 'Mrs. Pooja Bansal',    designation: 'Administrative Officer', department: 'Admin',       mobile: '+91 98••• ••204', email: 'admin@bfps-demo.edu.in',     category: 'Administrative Staff', avatar: 'PB' },
  { id: 'AD-02', name: 'Mr. Deepak Kumar',     designation: 'Front Desk Executive', department: 'Admin',          mobile: '+91 98••• ••205', email: 'frontdesk@bfps-demo.edu.in', category: 'Administrative Staff', avatar: 'DK' },
  { id: 'SU-01', name: 'Mr. Ravi Shankar',     designation: 'Head of Security',     department: 'Support',        mobile: '+91 98••• ••301', email: 'security@bfps-demo.edu.in',  category: 'Support Staff',        avatar: 'RS' },
  { id: 'SU-02', name: 'Ms. Lakshmi Devi',     designation: 'School Nurse',         department: 'Support',        mobile: '+91 98••• ••302', email: 'nurse@bfps-demo.edu.in',     category: 'Support Staff',        avatar: 'LD' },
];

export const STUDENTS = [
  { admissionNo: 'DEMO-2026-001', name: 'Aarav Sharma',  class: 'VIII', section: 'A', rollNo: 12, attendance: 94.4, performance: 87.6 },
  { admissionNo: 'DEMO-2026-002', name: 'Diya Patel',    class: 'VIII', section: 'A', rollNo: 13, attendance: 96.2, performance: 91.3 },
  { admissionNo: 'DEMO-2026-003', name: 'Arnav Gupta',   class: 'VIII', section: 'A', rollNo: 14, attendance: 88.5, performance: 78.4 },
  { admissionNo: 'DEMO-2026-004', name: 'Ishita Reddy',  class: 'VIII', section: 'A', rollNo: 15, attendance: 92.1, performance: 85.0 },
  { admissionNo: 'DEMO-2026-005', name: 'Kabir Singh',   class: 'VIII', section: 'A', rollNo: 16, attendance: 90.8, performance: 82.7 },
  { admissionNo: 'DEMO-2026-006', name: 'Ananya Iyer',   class: 'VIII', section: 'A', rollNo: 17, attendance: 97.4, performance: 93.8 },
  { admissionNo: 'DEMO-2026-007', name: 'Reyansh Mehta', class: 'VIII', section: 'A', rollNo: 18, attendance: 85.6, performance: 74.2 },
  { admissionNo: 'DEMO-2026-008', name: 'Saanvi Joshi',  class: 'VIII', section: 'A', rollNo: 19, attendance: 95.3, performance: 89.5 },
  { admissionNo: 'DEMO-2026-009', name: 'Vivaan Nair',   class: 'VIII', section: 'A', rollNo: 20, attendance: 91.7, performance: 83.1 },
  { admissionNo: 'DEMO-2026-010', name: 'Myra Kapoor',   class: 'VIII', section: 'A', rollNo: 21, attendance: 98.2, performance: 95.4 },
];

export const FEES = {
  summary: { total: 84000, paid: 63000, pending: 21000, nextDue: '2026-11-10' },
  breakdown: [
    { type: 'Tuition Fee',     total: 48000, paid: 48000, pending: 0,     status: 'Paid' },
    { type: 'Transport Fee',   total: 18000, paid: 12000, pending: 6000,  status: 'Partially Paid' },
    { type: 'Examination Fee', total: 3000,  paid: 3000,  pending: 0,     status: 'Paid' },
    { type: 'Activity Fee',    total: 6000,  paid: 0,     pending: 6000,  status: 'Pending' },
    { type: 'Annual Charges',  total: 9000,  paid: 0,     pending: 9000,  status: 'Pending' },
  ],
  history: [
    { id: 'RCPT-2026-1102', date: '2026-09-15', amount: 24000, mode: 'Online', desc: 'Tuition Q2' },
    { id: 'RCPT-2026-0987', date: '2026-08-10', amount: 12000, mode: 'Online', desc: 'Transport Term 2' },
    { id: 'RCPT-2026-0854', date: '2026-06-05', amount: 24000, mode: 'UPI',    desc: 'Tuition Q1' },
    { id: 'RCPT-2026-0711', date: '2026-04-10', amount: 3000,  mode: 'Cash',   desc: 'Exam Fee Term 1' },
  ],
};

export const TEACHER_CLASSES = [
  { id: 1, class: 'VIII', section: 'A', subject: 'Science', students: 32 },
  { id: 2, class: 'VIII', section: 'B', subject: 'Science', students: 30 },
  { id: 3, class: 'IX',   section: 'A', subject: 'Science', students: 34 },
  { id: 4, class: 'IX',   section: 'B', subject: 'Science', students: 29 },
];

export const TIMETABLE = [
  { day: 'Monday',    periods: ['Math', 'Science', 'English', 'Hindi', 'SST', 'Computer'] },
  { day: 'Tuesday',   periods: ['English', 'Hindi', 'Math', 'Science', 'Computer', 'Sanskrit'] },
  { day: 'Wednesday', periods: ['Science', 'Math', 'SST', 'English', 'Hindi', 'Games'] },
  { day: 'Thursday',  periods: ['Hindi', 'Science', 'Math', 'Computer', 'English', 'SST'] },
  { day: 'Friday',    periods: ['Math', 'SST', 'English', 'Hindi', 'Science', 'Sanskrit'] },
  { day: 'Saturday',  periods: ['English', 'Math', 'Science', 'Library', 'Club', 'Assembly'] },
];

export const PERIOD_TIMES = ['08:00–08:45', '08:45–09:30', '09:45–10:30', '10:30–11:15', '11:30–12:15', '12:15–01:00'];

export const UPCOMING_EXAMS = [
  { id: 1, name: 'Half-Yearly', subject: 'Mathematics',    date: '2026-11-20', startTime: '09:00', duration: '3 hrs', room: 'Hall A' },
  { id: 2, name: 'Half-Yearly', subject: 'Science',        date: '2026-11-22', startTime: '09:00', duration: '3 hrs', room: 'Hall A' },
  { id: 3, name: 'Half-Yearly', subject: 'English',        date: '2026-11-24', startTime: '09:00', duration: '3 hrs', room: 'Hall A' },
  { id: 4, name: 'Half-Yearly', subject: 'Social Science', date: '2026-11-26', startTime: '09:00', duration: '3 hrs', room: 'Hall B' },
];

export const EVENTS = [
  { id: 1, name: 'Parent-Teacher Meeting', date: '2026-10-12', time: '09:00 – 13:00', venue: 'Main Auditorium', category: 'Academic',     description: 'Discuss student progress with subject teachers.' },
  { id: 2, name: 'Inter-House Quiz',       date: '2026-10-18', time: '10:00 – 12:30', venue: 'Seminar Hall',    category: 'Competition',  description: 'Quiz for classes VI–X across all houses.' },
  { id: 3, name: 'Diwali Celebration',     date: '2026-11-09', time: '11:00 – 13:00', venue: 'School Ground',   category: 'Cultural',     description: 'Cultural performances and diya decoration.' },
  { id: 4, name: 'Annual Sports Day',      date: '2026-11-25', time: '08:00 – 16:00', venue: 'Sports Ground',   category: 'Sports',       description: 'Athletics, march-past and team events.' },
  { id: 5, name: 'Republic Day',           date: '2027-01-26', time: '08:00 – 10:00', venue: 'School Ground',   category: 'Holiday',      description: 'Flag hoisting ceremony and cultural program.' },
  { id: 6, name: 'Annual Day',             date: '2027-02-14', time: '17:00 – 21:00', venue: 'Main Auditorium', category: 'School Event', description: 'Annual cultural extravaganza.' },
];

export const NOTIFICATIONS = [
  { id: 1, title: 'New homework assigned', message: 'Mathematics — Exercise 4.3 by Mr. Vikram Singh',  time: '2h ago', unread: true,  type: 'homework' },
  { id: 2, title: 'New notice published',  message: 'Annual Sports Day 2026 — Register by 15 Nov',    time: '5h ago', unread: true,  type: 'notice' },
  { id: 3, title: 'Attendance updated',    message: 'Marked present for 07 Oct 2026',                  time: '1d ago', unread: true,  type: 'attendance' },
  { id: 4, title: 'Exam announcement',     message: 'Half-Yearly datesheet released',                  time: '2d ago', unread: false, type: 'exam' },
  { id: 5, title: 'Fee reminder',          message: '₹21,000 due on 10 Nov 2026',                      time: '3d ago', unread: true,  type: 'fee' },
  { id: 6, title: 'New study material',    message: 'Science — Cell Structure notes uploaded',         time: '4d ago', unread: false, type: 'material' },
  { id: 7, title: 'School event',          message: 'PTM scheduled for 12 Oct 2026',                   time: '5d ago', unread: false, type: 'event' },
];
