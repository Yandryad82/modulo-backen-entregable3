const {DataTypes} = require('sequelize');

const db = require('../utils/database');

const Todo = db.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  assignedUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'assigned_user'
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  },
},{
  timestamps: true,
  updatedAt: false,
  createdAt: 'created_at',

});

module.exports = Todo;

