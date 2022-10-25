const Task = require('../models/tasks');

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find()
        res.status(201).json({ task });
    } catch (err) {
        res.status(500);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task);
    } catch (err) {
        res.status(500);
    }
}

const updateTask = (req, res) => {
    res.send('Update Task');
}

const deleteTask = (req, res) => {
    res.send('Delete Task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};