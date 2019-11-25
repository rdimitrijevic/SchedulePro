const express = require('express');

const auth = require('../authentication/auth');
const router = express.Router();

const task = require('../services/taskServices');

router.get('/all', auth.authenticated, task.getUserTasks);

router.post('/addtask', auth.authenticated, task.addTask);

router.delete('/deltask/:id', auth.deleteAuthenticated, task.deleteTask);

module.exports = router;