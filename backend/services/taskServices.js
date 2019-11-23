const Task = require('../models/Task');


async function addTask(req, res) {
    const newTask = new Task({
        owner_email: req.body.owner_email,
        title: req.body.title,
        content: req.body.content
    });

    newTask.save().then((doc) => res.json({message: "successfully added task"}));
}

async function deleteTask(req, res) {
    await Task.findByIdAndRemove(req.body.id, (err) => {
        if(!err){
            res.json({message: "task removed"});
        } else {
            res.json({message: "task not removed"});
        }
    });
}

async function getUserTasks(req, res) {
    await Task.find({owner_email: req.body.owner_email}, (err, doc) => {
        if(!err) {
            res.json(doc);
        } else {
            res.json({message: "tasks empty"});
        }
    });
}

module.exports = {
    addTask,
    deleteTask,
    getUserTasks
};
