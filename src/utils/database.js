const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todo_db",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123.Abc*",
  dialect: "postgres",
});

module.exports = db;