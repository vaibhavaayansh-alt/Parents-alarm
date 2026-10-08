# Bright Future Public School — Parents Platform

A modern, responsive School Parents Platform / School Management Portal with role-based dashboards for **Students/Parents, Teachers, Principals, Directors, and Accountants**.

![Status](https://img.shields.io/badge/status-demo-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Features

- **Multi-role login** — Student/Parent, Teacher, Principal, Director, Accountant
- **Student/Parent dashboard** — Attendance, percentage, fees, homework, notices, exams, timetable
- **Marksheet** — Exam-wise results with grades, rank, printable layout
- **Attendance** — Monthly calendar + summary table
- **Homework & Notes** — Subject filters, statuses, teacher uploads
- **Notice Board** — Category filters, search, important highlighting
- **Teachers Directory & Staff Directory** — Searchable & filterable
- **Fees & Accounts** — Breakdown, payment history, printable receipts
- **Teacher Dashboard** — Mark attendance, assign homework, upload notes
- **Principal & Director Dashboards** — Charts (Recharts), school-wide analytics
- **Dark mode** — Persistent via localStorage
- **Fully responsive** — Mobile hamburger nav, responsive tables
- **Role-based access control (RBAC)** — Protected routes

---

## 🧱 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Charts | Recharts |
| Routing | React Router v6 |
| Backend | Node.js + Express |
| Database | MongoDB (Mongoose) |
| Auth | JWT (demo: local data layer) |

---

## 📁 Project Structure

```
Parents-alarm/
├── frontend/          # React + Vite app
│   └── src/
│       ├── components/   # Reusable UI & cards
│       ├── pages/        # Route pages
│       ├── layouts/      # Dashboard layout
│       ├── hooks/        # useApi etc.
│       ├── services/     # API layer (swappable)
│       ├── context/      # Auth, Theme, Toast
│       └── data/         # Demo data
├── backend/           # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── services/
├── README.md
└── .gitignore
```

---

## 🔑 Demo Credentials

> ⚠️ **Demo-only credentials.** Never use in production.

| Role | ID | Password |
|------|----|----------|
| Student / Parent | `DEMO-2026-001` | `student123` |
| Teacher | `T-1001` | `teacher123` |
| Principal | `P-001` | `principal123` |
| Director | `D-001` | `director123` |
| Accountant | `A-001` | `account123` |

On the login page, click a role chip to autofill.

---

## 🚀 Local Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

The frontend runs entirely on local demo data (no backend needed) out of the box.

### Backend (optional)

```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
# http://localhost:5000
```

---

## 🗄️ Database

Entities: `User`, `Student`, `Teacher`, `Attendance`, `Homework`, `Marks`, `Notice`, `StudyMaterial`, `Fee`, `FeePayment`, `Event`, `Notification`.

---

## 🛡️ Security Notes

- Passwords hashed with bcrypt on the backend.
- JWT-based authentication.
- Helmet + CORS + rate limiting enabled.
- Frontend routes protected by role; backend enforces RBAC.

> ⚠️ **Demo mode** uses a local data layer. This is **not** production authentication.

---

## 📝 License

MIT — for educational and demonstration use. Demo data is fictional.

---

Built with ❤️ for schools.
