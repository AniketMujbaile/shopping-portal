const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Create a task
router.post('/', createTask);

// Get all tasks
router.get('/', getAllTasks);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;
