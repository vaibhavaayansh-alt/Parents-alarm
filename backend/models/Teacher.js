import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  user:           { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  teacherId:      { type: String, required: true, unique: true },
  name:           { type: String, required: true },
  designation:    { type: String, required: true },
  department:     { type: String },
  subjects:       [String],
  classes:        [String],
  classTeacherOf: { type: String },
  mobile:         { type: String },
  email:          { type: String },
  avatar:         { type: String },
}, { timestamps: true });

export default mongoose.model('Teacher', teacherSchema);
