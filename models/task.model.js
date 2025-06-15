export default (sequelize, DataTypes) => {
  return sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.STRING, defaultValue: 'pending' },
    dueDate: { type: DataTypes.DATE }
  });
};
