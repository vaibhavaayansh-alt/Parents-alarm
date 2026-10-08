import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  full:        { type: String, required: true },
  category:    { type: String, enum: ['General', 'Academic', 'Examination', 'Holiday', 'Sports', 'Event', 'Competition', 'Important'], default: 'General' },
  important:   { type: Boolean, default: false },
  publishedBy: { type: String },
  author:      { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date:        { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Notice', noticeSchema);
