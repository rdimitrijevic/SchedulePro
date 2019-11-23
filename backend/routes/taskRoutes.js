const express = require('express');

const router = express.Router();

const task = require('../services/taskServices');

router.get('/', task.getUserTasks);

router.post('/addtask', task.addTask);

router.delete('/deltask', task.deleteTask);

module.exports = router;