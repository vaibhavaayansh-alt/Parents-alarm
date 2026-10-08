import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Student from '../models/Student.js';
import Teacher from '../models/Teacher.js';
import Notice from '../models/Notice.js';

dotenv.config();

const DEMO = [
  { userId: 'DEMO-2026-001', name: 'Aarav Sharma',         email: 'student@demo.bfps.in',    role: 'STUDENT_PARENT', password: 'student123' },
  { userId: 'T-1001',        name: 'Dr. Ananya Sharma',    email: 'teacher@demo.bfps.in',    role: 'TEACHER',        password: 'teacher123' },
  { userId: 'P-001',         name: 'Mr. Rajesh Verma',     email: 'principal@demo.bfps.in',  role: 'PRINCIPAL',      password: 'principal123' },
  { userId: 'D-001',         name: 'Mrs. Kavita Malhotra', email: 'director@demo.bfps.in',   role: 'DIRECTOR',       password: 'director123' },
  { userId: 'A-001',         name: 'Mr. Suresh Patel',     email: 'accountant@demo.bfps.in', role: 'ACCOUNTANT',     password: 'account123' },
];

async function seed() {
  await connectDB();
  console.log('🌱 Seeding...');

  await Promise.all([User.deleteMany({}), Student.deleteMany({}), Teacher.deleteMany({}), Notice.deleteMany({})]);

  for (const d of DEMO) {
    const hash = await bcrypt.hash(d.password, 10);
    await User.create({ ...d, password: hash });
  }

  const studentUser = await User.findOne({ userId: 'DEMO-2026-001' });
  await Student.create({
    user: studentUser._id,
    admissionNo: 'DEMO-2026-001',
    name: 'Aarav Sharma',
    class: 'VIII', section: 'A', rollNo: 12,
    dob: new Date('2013-04-18'),
    house: 'Blue House', busRoute: 'Route 7 — Sector 45',
    admissionDate: new Date('2022-04-01'),
    father: 'Mr. Rohit Sharma', mother: 'Mrs. Neha Sharma',
    contact: '+91 98••• ••123', email: 'parent.sharma@example.com',
  });

  const teacherUser = await User.findOne({ userId: 'T-1001' });
  await Teacher.create({
    user: teacherUser._id,
    teacherId: 'T-1001', name: 'Dr. Ananya Sharma',
    designation: 'Senior Teacher', department: 'Science',
    subjects: ['Science'], classes: ['VII', 'VIII', 'IX'],
    classTeacherOf: 'VIII-A', mobile: '+91 98••• ••101',
    email: 'ananya.sharma@bfps-demo.edu.in', avatar: 'AS',
  });

  await Notice.create([
    { title: 'Annual Sports Day 2026', description: 'Sports Day on 25th Nov.', full: 'The Annual Sports Day will be held on 25th November 2026.', category: 'Sports', important: true, publishedBy: 'Principal Office' },
    { title: 'Half-Yearly Exam Schedule', description: 'Datesheet released.', full: 'Exams begin 20th Nov 2026. Datesheet is on the portal.', category: 'Examination', important: true, publishedBy: 'Exam Cell' },
    { title: 'Diwali Break', description: 'School closed 10–15 Nov.', full: 'School will remain closed from 10th to 15th November for Diwali.', category: 'Holiday', publishedBy: 'Principal Office' },
  ]);

  console.log('✅ Seed complete.');
  await mongoose.disconnect();
}

seed().catch((e) => { console.error(e); process.exit(1); });
