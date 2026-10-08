import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userId:   { type: String, required: true, unique: true, index: true },
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  role:     { type: String, required: true, enum: ['STUDENT_PARENT', 'TEACHER', 'PRINCIPAL', 'DIRECTOR', 'ACCOUNTANT'] },
  avatar:   { type: String },
  active:   { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
