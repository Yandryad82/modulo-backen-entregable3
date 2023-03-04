const UsersService = require('../services/users.service');

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UsersService.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
}

const getTodosByUser = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UsersService.getTodosByUserId(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createUser,
  getTodosByUser,
};