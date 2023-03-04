const TodosService = require('../services/todos.service');

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodosService.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodosWitId = async (req, res) => {
  try {
    const {todoId} = req.params;
    const result = await TodosService.getTodosWithUser(todoId);
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const updateTodoData = req.body;
    await TodosService.update(id, updateTodoData);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    await TodosService.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  createTodo,
  getTodosWitId,
  updateTodo,
  deleteTodo
};