const Task = require('../models/Task');


async function addTask(req, res) {
    const newTask = new Task({
        owner_email: req.user.email,
        title: req.body.title,
        content: req.body.content
    });

    newTask.save().then(() => {
        res.status(201);
        res.json({success: "successfully added task"})
    });
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
    await Task.find({owner_email: req.user.email}, (err, doc) => {
        res.status(200).json(doc);
    })
    .catch(err => console.log(err));
}

module.exports = {
    addTask,
    deleteTask,
    getUserTasks
};
