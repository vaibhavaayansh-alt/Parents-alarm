// ═══════════════════════════════════════════════
// Shemford Futuristic School — Demo Data
// ═══════════════════════════════════════════════

export const SCHOOL = {
  name: 'Shemford Futuristic School',
  shortName: 'SFS',
  tagline: 'Connect • Learn • Grow',
  address: 'Dumri Branch, Dumri, Patna Bypass Road, Muzaffarpur, Bihar — 843113',
  phone: '+91 754-202-1199, +91 993-435-0900',
  email: 'vacancies.shemford@gmail.com',
  website: 'shemfordmuzaffarpur.in',
  session: '2026–27',
  established: '2013',
  board: 'CBSE',
  trust: 'Radhawati Devi Educational Foundation Trust',
};

export const CREDITS = {
  developer: { name: 'Aayansh Vaibhav', grade: 'Grade 8C', role: 'Developer' },
  guide: { name: 'Dhananjay Sir', role: 'Coding Expert' },
  school: 'Shemford Futuristic School',
};

export const LEADERSHIP = {
  director: { name: 'Richa Sharma', role: 'Director' },
  principal: { name: '—', role: 'Currently Vacant' },
  accountant: { name: 'Mr. Suraj Shah', role: 'Accountant' },
  admin: { name: 'Mr. Santosh Sir', role: 'Administrator & In-Charge' },
};

export const DEMO_ACCOUNTS = {
  student:    { id: 'SFS-2026-001', password: 'student123',   name: 'Aayansh Vaibhav',   role: 'STUDENT_PARENT' },
  teacher:    { id: 'T-1001',       password: 'teacher123',   name: 'Anjna Ma\'am',      role: 'TEACHER' },
  principal:  { id: 'P-001',        password: 'principal123', name: 'Rajesh Verma',      role: 'PRINCIPAL' },
  director:   { id: 'D-001',        password: 'director123',  name: 'Richa Sharma',      role: 'DIRECTOR' },
  accountant: { id: 'A-001',        password: 'account123',   name: 'Mr. Suraj Shah',    role: 'ACCOUNTANT' },
};

export const STUDENT = {
  id: 'SFS-2026-001',
  admissionNo: 'SFS-2026-001',
  name: 'Aayansh Vaibhav',
  class: 'VIII',
  section: 'C',
  rollNo: 12,
  dob: '2014-07-05',
  gender: 'Male',
  bloodGroup: 'O+',
  house: 'Green House',
  busRoute: 'Route 7 — Dumri',
  admissionDate: '2022-04-01',
  academicSession: '2026–27',
  classTeacher: 'Anjna Ma\'am',
  father: '—',
  mother: '—',
  contact: '+91 98••• ••123',
  email: 'parent@example.com',
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
  { period: 1, subject: 'Mathematics',    teacher: 'Prem Sir',      time: '08:00 – 08:45' },
  { period: 2, subject: 'Science',        teacher: 'Rajneesh Sir',  time: '08:45 – 09:30' },
  { period: 3, subject: 'English',        teacher: 'Nitish Sir',    time: '09:45 – 10:30' },
  { period: 4, subject: 'Hindi',          teacher: 'Anjna Ma\'am',  time: '10:30 – 11:15' },
  { period: 5, subject: 'Social Science', teacher: 'Vasant Sir',    time: '11:30 – 12:15' },
  { period: 6, subject: 'Computer',       teacher: 'Anand Sir',     time: '12:15 – 01:00' },
];

export const NOTICES = [
  { id: 1, title: 'Annual Sports Day 2026', date: '2026-10-05', publishedBy: 'Director Office', category: 'Sports', important: true,
    description: 'Annual Sports Day will be held on 25th November 2026. All students must register by 15th November.',
    full: 'The Annual Sports Day for the academic session 2026–27 will be held on 25th November 2026 at the school main ground. Events include Kho-Kho, Volleyball, Handball, Badminton, Basketball, athletics and march-past. Parents are cordially invited.' },
  { id: 2, title: 'Half-Yearly Examination Schedule', date: '2026-10-03', publishedBy: 'Examination Cell', category: 'Examination', important: true,
    description: 'Datesheet for Half-Yearly exams released. Exams begin 20th November 2026.',
    full: 'The Half-Yearly Examination will commence from 20th November 2026. Students must carry their admit cards.' },
  { id: 3, title: 'Diwali Break Announcement', date: '2026-10-01', publishedBy: 'Director Office', category: 'Holiday', important: false,
    description: 'School will remain closed from 10th to 15th November 2026 for Diwali.',
    full: 'The school will remain closed from 10th to 15th November 2026 for Diwali. School reopens on 16th November 2026.' },
  { id: 4, title: 'Parent-Teacher Meeting', date: '2026-09-28', publishedBy: 'Academic Office', category: 'Event', important: false,
    description: 'PTM scheduled for 12th October 2026 from 9:00 AM to 1:00 PM.',
    full: 'A Parent-Teacher Meeting is scheduled for 12th October 2026 from 9:00 AM to 1:00 PM.' },
  { id: 5, title: 'Inter-House Quiz Competition', date: '2026-09-25', publishedBy: 'Cultural Committee', category: 'Competition', important: false,
    description: 'Inter-house quiz competition on 18th October 2026.',
    full: 'The Inter-House Quiz Competition will be held on 18th October 2026.' },
];

export const HOMEWORK = [
  { id: 1, subject: 'Mathematics',    title: 'Quadratic Equations — Exercise 4.3', description: 'Solve all problems from Exercise 4.3, pages 82–84.', assignedDate: '2026-10-06', dueDate: '2026-10-09', teacher: 'Prem Sir',      status: 'Pending' },
  { id: 2, subject: 'Science',        title: 'Chapter 5: Cell Structure — Diagrams', description: 'Draw and label plant cell and animal cell diagrams.', assignedDate: '2026-10-06', dueDate: '2026-10-08', teacher: 'Rajneesh Sir',  status: 'Submitted' },
  { id: 3, subject: 'English',        title: 'Essay: My Vision for India 2047',     description: 'Write a 300-word essay. Submit handwritten.', assignedDate: '2026-10-04', dueDate: '2026-10-07', teacher: 'Nitish Sir',    status: 'Overdue' },
  { id: 4, subject: 'Hindi',          title: 'व्याकरण — संधि अभ्यास',                description: 'Complete sandhi exercises from page 45.', assignedDate: '2026-10-05', dueDate: '2026-10-10', teacher: 'Anjna Ma\'am',  status: 'Pending' },
  { id: 5, subject: 'Social Science', title: 'Map Work: Resources of India',        description: 'Mark major mineral resources on India outline map.', assignedDate: '2026-10-03', dueDate: '2026-10-07', teacher: 'Vasant Sir',    status: 'Completed' },
  { id: 6, subject: 'Computer',       title: 'HTML Basics — Build a Web Page',      description: 'Create a simple HTML page about your hobby.', assignedDate: '2026-10-02', dueDate: '2026-10-08', teacher: 'Anand Sir',     status: 'Pending' },
  { id: 7, subject: 'Sanskrit',       title: 'श्लोक अभ्यास — Chapter 3',             description: 'Memorize shlokas 1–5 from chapter 3.', assignedDate: '2026-10-01', dueDate: '2026-10-06', teacher: 'Preeti Ma\'am', status: 'Overdue' },
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
  { id: 1, subject: 'Mathematics',    chapter: 'Chapter 4', title: 'Quadratic Equations — Full Notes', teacher: 'Prem Sir',      uploadDate: '2026-10-01', type: 'PDF',  size: '2.4 MB' },
  { id: 2, subject: 'Science',        chapter: 'Chapter 5', title: 'Cell — Structure and Functions',  teacher: 'Rajneesh Sir',  uploadDate: '2026-09-28', type: 'PDF',  size: '3.1 MB' },
  { id: 3, subject: 'English',        chapter: 'Unit 2',    title: 'Grammar: Tenses & Voice',          teacher: 'Nitish Sir',    uploadDate: '2026-09-25', type: 'DOCX', size: '1.2 MB' },
  { id: 4, subject: 'Hindi',          chapter: 'पाठ 3',      title: 'संधि एवं समास — नोट्स',             teacher: 'Anjna Ma\'am',  uploadDate: '2026-09-22', type: 'PDF',  size: '1.8 MB' },
  { id: 5, subject: 'Social Science', chapter: 'Chapter 3', title: 'Resources and Development',        teacher: 'Vasant Sir',    uploadDate: '2026-09-20', type: 'PDF',  size: '4.2 MB' },
  { id: 6, subject: 'Computer',       chapter: 'Chapter 2', title: 'HTML & Web Basics',                teacher: 'Anand Sir',     uploadDate: '2026-09-18', type: 'PPTX', size: '5.6 MB' },
  { id: 7, subject: 'Sanskrit',       chapter: 'पाठ 3',      title: 'श्लोक संग्रह एवं अर्थ',             teacher: 'Preeti Ma\'am', uploadDate: '2026-09-15', type: 'PDF',  size: '1.1 MB' },
];

export const TEACHERS = [
  { id: 'T-1001', name: 'Anjna Ma\'am',        designation: 'TGT Hindi',              subjects: ['Hindi'],           classTeacherOf: '8C', classes: ['6', '7', '8'], mobile: '+91 98••• ••101', email: 'anjna@shemford.edu.in',     department: 'Languages',        avatar: 'AN' },
  { id: 'T-1002', name: 'Prem Sir',             designation: 'PGT Mathematics',        subjects: ['Mathematics'],     classTeacherOf: '7A', classes: ['7', '8', '9'], mobile: '+91 98••• ••102', email: 'prem@shemford.edu.in',      department: 'Mathematics',      avatar: 'PR' },
  { id: 'T-1003', name: 'Rajneesh Sir',         designation: 'PGT Science',            subjects: ['Science'],         classTeacherOf: '8B', classes: ['8', '9', '10'], mobile: '+91 98••• ••103', email: 'rajneesh@shemford.edu.in',  department: 'Science',          avatar: 'RJ' },
  { id: 'T-1004', name: 'Preeti Ma\'am',        designation: 'Sanskrit Teacher',       subjects: ['Sanskrit'],        classTeacherOf: '7B', classes: ['6', '7', '8'], mobile: '+91 98••• ••104', email: 'preeti@shemford.edu.in',    department: 'Languages',        avatar: 'PT' },
  { id: 'T-1005', name: 'Anand Sir',            designation: 'Computer Faculty',       subjects: ['Computer'],        classTeacherOf: '—',  classes: ['6', '7', '8', '9', '10'], mobile: '+91 98••• ••105', email: 'anand@shemford.edu.in',     department: 'Computer Science', avatar: 'AN' },
  { id: 'T-1006', name: 'Vasant Sir',           designation: 'TGT Social Science',     subjects: ['Social Science'],  classTeacherOf: '—',  classes: ['6', '7', '8', '9', '10'], mobile: '+91 98••• ••106', email: 'vasant@shemford.edu.in',    department: 'Social Science',   avatar: 'VS' },
  { id: 'T-1007', name: 'Nitish Sir',           designation: 'TGT English',            subjects: ['English'],         classTeacherOf: '9A', classes: ['6', '7', '8', '9'], mobile: '+91 98••• ••107', email: 'nitish@shemford.edu.in',    department: 'Languages',        avatar: 'NT' },
  { id: 'T-1008', name: 'Mr. Krishna Thakur',  designation: 'Sports Teacher (Male)',  subjects: ['Sports'],          classTeacherOf: '—',  classes: ['All'],              mobile: '+91 98••• ••108', email: 'krishna@shemford.edu.in',   department: 'Sports',           avatar: 'KT' },
  { id: 'T-1009', name: 'Neetu Ma\'am',         designation: 'Sports Teacher (Female)', subjects: ['Sports'],         classTeacherOf: '—',  classes: ['All'],              mobile: '+91 98••• ••109', email: 'neetu@shemford.edu.in',     department: 'Sports',           avatar: 'NT' },
];

export const STAFF = [
  ...TEACHERS.map((t) => ({ ...t, category: 'Teachers' })),
  { id: 'D-001', name: 'Richa Sharma',        designation: 'Director',                  department: 'Management', mobile: '+91 98••• ••201', email: 'director@shemford.edu.in',  category: 'Director',             avatar: 'RS' },
  { id: 'A-001', name: 'Mr. Suraj Shah',      designation: 'Accountant',                department: 'Accounts',   mobile: '+91 98••• ••202', email: 'accounts@shemford.edu.in',  category: 'Accountant',           avatar: 'SS' },
  { id: 'AD-01', name: 'Mr. Santosh Sir',     designation: 'Administrator & In-Charge', department: 'Admin',      mobile: '+91 98••• ••203', email: 'admin@shemford.edu.in',     category: 'Administrative Staff', avatar: 'SN' },
  { id: 'AD-02', name: 'Mr. Deepak Kumar',    designation: 'Front Desk Executive',      department: 'Admin',      mobile: '+91 98••• ••204', email: 'frontdesk@shemford.edu.in', category: 'Administrative Staff', avatar: 'DK' },
  { id: 'SU-01', name: 'Mr. Ravi Shankar',    designation: 'Head of Security',          department: 'Support',    mobile: '+91 98••• ••301', email: 'security@shemford.edu.in',  category: 'Support Staff',        avatar: 'RS' },
  { id: 'SU-02', name: 'Ms. Lakshmi Devi',    designation: 'School Nurse',              department: 'Support',    mobile: '+91 98••• ••302', email: 'nurse@shemford.edu.in',     category: 'Support Staff',        avatar: 'LD' },
];

export const STUDENTS = [
  // Class VIII-C
  { admissionNo: 'SFS-2026-001', name: 'Aayansh Vaibhav',  class: 'VIII', section: 'C', rollNo: 12, attendance: 94.4, performance: 87.6 },
  { admissionNo: 'SFS-2026-002', name: 'Pratyush Rai',     class: 'VIII', section: 'C', rollNo: 13, attendance: 96.2, performance: 91.3 },
  { admissionNo: 'SFS-2026-003', name: 'Sudhanshu Kumar',  class: 'VIII', section: 'C', rollNo: 14, attendance: 88.5, performance: 78.4 },
  { admissionNo: 'SFS-2026-004', name: 'Priyavrat Singh',  class: 'VIII', section: 'C', rollNo: 15, attendance: 92.1, performance: 85.0 },
  { admissionNo: 'SFS-2026-005', name: 'Aditya Raj',       class: 'VIII', section: 'C', rollNo: 16, attendance: 90.8, performance: 82.7 },
  { admissionNo: 'SFS-2026-006', name: 'Sneha Kumari',     class: 'VIII', section: 'C', rollNo: 17, attendance: 97.4, performance: 93.8 },
  { admissionNo: 'SFS-2026-007', name: 'Rohan Verma',      class: 'VIII', section: 'C', rollNo: 18, attendance: 85.6, performance: 74.2 },
  { admissionNo: 'SFS-2026-008', name: 'Kavya Sharma',     class: 'VIII', section: 'C', rollNo: 19, attendance: 95.3, performance: 89.5 },
  { admissionNo: 'SFS-2026-009', name: 'Vivaan Gupta',     class: 'VIII', section: 'C', rollNo: 20, attendance: 91.7, performance: 83.1 },
  { admissionNo: 'SFS-2026-010', name: 'Myra Singh',       class: 'VIII', section: 'C', rollNo: 21, attendance: 98.2, performance: 95.4 },

  // Senior KG
  { admissionNo: 'SFS-SKG-001', name: 'Aarav Kumar',      class: 'Senior KG', section: 'A', rollNo: 1,  attendance: 96.0, performance: 90.0 },
  { admissionNo: 'SFS-SKG-002', name: 'Diya Sharma',      class: 'Senior KG', section: 'A', rollNo: 2,  attendance: 94.5, performance: 88.0 },
  { admissionNo: 'SFS-SKG-003', name: 'Kabir Singh',      class: 'Senior KG', section: 'A', rollNo: 3,  attendance: 92.0, performance: 85.0 },

  // Class I
  { admissionNo: 'SFS-C1-001', name: 'Ishaan Verma',      class: 'I',  section: 'A', rollNo: 1, attendance: 95.0, performance: 87.0 },
  { admissionNo: 'SFS-C1-002', name: 'Anaya Gupta',       class: 'I',  section: 'A', rollNo: 2, attendance: 93.5, performance: 89.0 },

  // Class II
  { admissionNo: 'SFS-C2-001', name: 'Vihaan Reddy',      class: 'II', section: 'A', rollNo: 1, attendance: 94.0, performance: 86.0 },
  { admissionNo: 'SFS-C2-002', name: 'Saanvi Joshi',      class: 'II', section: 'A', rollNo: 2, attendance: 96.0, performance: 91.0 },

  // Class III
  { admissionNo: 'SFS-C3-001', name: 'Arjun Mehta',       class: 'III', section: 'A', rollNo: 1, attendance: 92.5, performance: 84.0 },
  { admissionNo: 'SFS-C3-002', name: 'Ishita Rao',        class: 'III', section: 'A', rollNo: 2, attendance: 95.0, performance: 88.0 },

  // Class IV
  { admissionNo: 'SFS-C4-001', name: 'Reyansh Iyer',      class: 'IV', section: 'A', rollNo: 1, attendance: 93.0, performance: 85.0 },
  { admissionNo: 'SFS-C4-002', name: 'Anika Patel',       class: 'IV', section: 'A', rollNo: 2, attendance: 96.5, performance: 92.0 },

  // Class V
  { admissionNo: 'SFS-C5-001', name: 'Vivaan Nair',       class: 'V',  section: 'A', rollNo: 1, attendance: 91.5, performance: 83.0 },
  { admissionNo: 'SFS-C5-002', name: 'Diya Kapoor',       class: 'V',  section: 'A', rollNo: 2, attendance: 94.5, performance: 87.0 },

  // Class VI
  { admissionNo: 'SFS-C6-001', name: 'Aarav Sharma',      class: 'VI', section: 'A', rollNo: 1, attendance: 93.0, performance: 84.0 },
  { admissionNo: 'SFS-C6-002', name: 'Ananya Reddy',      class: 'VI', section: 'A', rollNo: 2, attendance: 95.5, performance: 89.0 },

  // Class VII
  { admissionNo: 'SFS-C7-001', name: 'Arnav Gupta',       class: 'VII', section: 'A', rollNo: 1, attendance: 90.5, performance: 82.0 },
  { admissionNo: 'SFS-C7-002', name: 'Ishita Nair',       class: 'VII', section: 'A', rollNo: 2, attendance: 94.0, performance: 86.0 },

  // Class IX
  { admissionNo: 'SFS-C9-001', name: 'Kabir Malhotra',    class: 'IX', section: 'A', rollNo: 1, attendance: 92.5, performance: 85.0 },
  { admissionNo: 'SFS-C9-002', name: 'Ananya Iyer',       class: 'IX', section: 'A', rollNo: 2, attendance: 96.0, performance: 91.0 },

  // Class X
  { admissionNo: 'SFS-C10-001', name: 'Rohan Verma',      class: 'X', section: 'A', rollNo: 1, attendance: 94.0, performance: 87.0 },
  { admissionNo: 'SFS-C10-002', name: 'Sneha Kapoor',     class: 'X', section: 'A', rollNo: 2, attendance: 95.5, performance: 90.0 },
];

export const FEES = {
  summary: { total: 84000, paid: 63000, pending: 21000, nextDue: '2026-11-10' },
  breakdown: [
    { type: 'Tuition Fee',     total: 48000, paid: 48000, pending: 0,    status: 'Paid' },
    { type: 'Transport Fee',   total: 18000, paid: 12000, pending: 6000, status: 'Partially Paid' },
    { type: 'Examination Fee', total: 3000,  paid: 3000,  pending: 0,    status: 'Paid' },
    { type: 'Activity Fee',    total: 6000,  paid: 0,     pending: 6000, status: 'Pending' },
    { type: 'Annual Charges',  total: 9000,  paid: 0,     pending: 9000, status: 'Pending' },
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
  { day: 'Wednesday', periods: ['Science', 'Math', 'SST', 'English', 'Hindi', 'Sports'] },
  { day: 'Thursday',  periods: ['Hindi', 'Science', 'Math', 'Computer', 'English', 'SST'] },
  { day: 'Friday',    periods: ['Math', 'SST', 'English', 'Hindi', 'Science', 'Sanskrit'] },
  { day: 'Saturday',  periods: ['English', 'Math', 'Science', 'Library', 'Sports', 'Assembly'] },
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
  { id: 4, name: 'Annual Sports Day',      date: '2026-11-25', time: '08:00 – 16:00', venue: 'Sports Ground',   category: 'Sports',       description: 'Kho-Kho, Volleyball, Handball, Badminton, Basketball, athletics.' },
  { id: 5, name: 'Republic Day',           date: '2027-01-26', time: '08:00 – 10:00', venue: 'School Ground',   category: 'Holiday',      description: 'Flag hoisting ceremony and cultural program.' },
  { id: 6, name: 'Annual Day',             date: '2027-02-14', time: '17:00 – 21:00', venue: 'Main Auditorium', category: 'School Event', description: 'Annual cultural extravaganza.' },
];

export const NOTIFICATIONS = [
  { id: 1, title: 'New homework assigned', message: 'Mathematics — Exercise 4.3 by Prem Sir',      time: '2h ago', unread: true,  type: 'homework' },
  { id: 2, title: 'New notice published',  message: 'Annual Sports Day 2026 — Register by 15 Nov', time: '5h ago', unread: true,  type: 'notice' },
  { id: 3, title: 'Attendance updated',    message: 'Marked present for 07 Oct 2026',              time: '1d ago', unread: true,  type: 'attendance' },
  { id: 4, title: 'Exam announcement',     message: 'Half-Yearly datesheet released',              time: '2d ago', unread: false, type: 'exam' },
  { id: 5, title: 'Fee reminder',          message: '₹21,000 due on 10 Nov 2026',                  time: '3d ago', unread: true,  type: 'fee' },
  { id: 6, title: 'New study material',    message: 'Science — Cell Structure notes uploaded',     time: '4d ago', unread: false, type: 'material' },
  { id: 7, title: 'School event',          message: 'PTM scheduled for 12 Oct 2026',               time: '5d ago', unread: false, type: 'event' },
];

export const SPORTS = [
  { name: 'Kho-Kho',    icon: '🏃', level: 'District • State • Inter-school' },
  { name: 'Volleyball', icon: '🏐', level: 'District • State • Inter-school' },
  { name: 'Handball',   icon: '🤾', level: 'District • State • Inter-school' },
  { name: 'Badminton',  icon: '🏸', level: 'District • State • Inter-school' },
  { name: 'Basketball', icon: '🏀', level: 'District • State • Inter-school' },
];

export const PREMIUM_PLAN = {
  price: '5,000',
  period: 'month',
  currency: '₹',
  features: [
    'Full portal access',
    'Student & Parent login',
    'Teacher management',
    'Fee tracking & receipts',
    'Attendance system',
    'Homework & study notes',
    'Notice board',
    'Exam & results',
    'Analytics dashboards',
    '24/7 support',
  ],
};
