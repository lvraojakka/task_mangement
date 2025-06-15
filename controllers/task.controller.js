import { Task } from '../models/index.js';

export const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, userId: req.user.id });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const where = { userId: req.user.id };
  if (req.query.status) where.status = req.query.status;
  if (req.query.dueDate) where.dueDate = req.query.dueDate;
  const tasks = await Task.findAll({ where });
  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
  return task ? res.json(task) : res.status(404).json({ message: 'Not found' });
};

export const updateTask = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
  if (!task) return res.status(404).json({ message: 'Not found' });
  await task.update(req.body);
  res.json(task);
};

export const completeTask = async (req, res) => {
  const task = await Task.findOne({ where: { id: req.params.id, userId: req.user.id } });
  if (!task) return res.status(404).json({ message: 'Not found' });
  await task.update({ status: 'completed' });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const deleted = await Task.destroy({ where: { id: req.params.id, userId: req.user.id } });
  res.json({ success: deleted > 0 });
};
