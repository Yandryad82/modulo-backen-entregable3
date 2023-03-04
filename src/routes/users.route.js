const { Router } = require('express');
const { createUser, getTodosByUser } = require('../controllers/users.controller');

const router = Router();

router.post('/api/v1/users', createUser);

router.get('/api/v1/users/:id/todos', getTodosByUser);

module.exports = router;