import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import noticeRoutes from './routes/notice.routes.js';
import homeworkRoutes from './routes/homework.routes.js';
import feeRoutes from './routes/fee.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use('/api/', limiter);

app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/fees', feeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Failed to start:', err.message);
    process.exit(1);
  });
