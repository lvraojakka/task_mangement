import { verifyToken } from '../utils/token.js';
import { User } from '../models/index.js';

export const auth = async (req, res, next) => {
  const token = req.header("Authorization")
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const payload = verifyToken(token);
    const user = await User.findByPk(payload.id);
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
