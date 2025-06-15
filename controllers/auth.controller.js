import { User } from '../models/index.js';
import { hashPassword, comparePassword } from '../utils/hash.js';
import { generateToken } from '../utils/token.js';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await hashPassword(password);
  const user = await User.create({ username, email, password: hash });
  res.status(201).json({ id: user.id, email: user.email });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken({ id: user.id });
  res.json({ token });
};
