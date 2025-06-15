import Sequelize from 'sequelize';
import sequelize from '../config/database.js';
import UserModel from './user.model.js';
import TaskModel from './task.model.js';

const User = UserModel(sequelize, Sequelize.DataTypes);
const Task = TaskModel(sequelize, Sequelize.DataTypes);

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

// Uncomment for development:
await sequelize.sync({ force: true });

export { sequelize, User, Task };
