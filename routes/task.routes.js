import express from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  completeTask,
  deleteTask
} from '../controllers/task.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { taskSchema } from '../validations/task.validation.js';

const router = express.Router();
router.use(auth);
router.post('/', validate(taskSchema), createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', validate(taskSchema), updateTask);
router.patch('/:id/complete', completeTask);
router.delete('/:id', deleteTask);

export default router;
