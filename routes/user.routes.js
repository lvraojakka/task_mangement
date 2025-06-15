import express from 'express';
import { getProfile } from '../controllers/user.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.get('/me', auth, getProfile);

export default router;
