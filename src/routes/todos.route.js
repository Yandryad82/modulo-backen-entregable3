const { Router } = require("express");

const { createTodo, getTodosWitId, updateTodo, deleteTodo } = require("../controllers/todos.controller");

const router = Router();

router.post('/api/v1/todos', createTodo);

router.put('/api/v1/todos/:id', updateTodo);

router.delete('/api/v1/todos/:id', deleteTodo);

router.get('/api/v1/todos/:todoId', getTodosWitId);

module.exports = router;