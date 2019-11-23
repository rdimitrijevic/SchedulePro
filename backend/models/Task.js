const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    owner_email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false,
        default: " "
    }
});

module.exports = mongoose.model('Task', TaskSchema);