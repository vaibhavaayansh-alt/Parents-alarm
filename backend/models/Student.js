import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user:          { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  admissionNo:   { type: String, required: true, unique: true },
  name:          { type: String, required: true },
  class:         { type: String, required: true },
  section:       { type: String, required: true },
  rollNo:        { type: Number, required: true },
  dob:           { type: Date },
  house:         { type: String },
  busRoute:      { type: String },
  admissionDate: { type: Date },
  session:       { type: String, default: '2026–27' },
  classTeacher:  { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  father:        { type: String },
  mother:        { type: String },
  contact:       { type: String },
  email:         { type: String },
  emergency:     { type: String },
  fees: {
    total:   { type: Number, default: 0 },
    paid:    { type: Number, default: 0 },
    pending: { type: Number, default: 0 },
    nextDue: { type: Date },
  },
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
