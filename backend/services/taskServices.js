const Task = require('../models/Task');


async function addTask(req, res) {
    const newTask = new Task({
        owner_email: req.user.email,
        title: req.body.title,
        content: req.body.content
    });

    newTask.save().then(() => {
        console.log("successfully added task");
        res.status(201);
        res.json({success: "successfully added task"})
    })
    .catch(err => console.log(err));
}

async function deleteTask(req, res) {
    console.log(req.params.id);
    await Task.findByIdAndRemove(req.params.id, {'useFindAndModify': false} ,(err, doc) => {
        console.log('usao');
        console.log(doc);
        if(doc){
            console.log(doc);
            res.json({message: "task removed"});
        } else if (err){
            console.log(err);
            res.json({error: "task not removed"});
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
