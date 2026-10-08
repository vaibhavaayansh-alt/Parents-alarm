import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export async function login(req, res) {
  const { id, password } = req.body;
  if (!id || !password) return res.status(400).json({ error: 'ID and password required' });

  const user = await User.findOne({ userId: id }).select('+password');
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user._id, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    success: true,
    token,
    user: { id: user.userId, name: user.name, role: user.role },
  });
}

export async function me(req, res) {
  res.json({ user: req.user });
}
