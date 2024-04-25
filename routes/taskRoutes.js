// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// Rota para buscar todas as tarefas
router.get('/tasks/all', TaskController.getAllTasks);

// Rota para buscar tarefas por título e/ou tags
router.get('/tasks', TaskController.getTasks);

// Rotas para as demais operações CRUD
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
