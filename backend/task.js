const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    }
}, {timesteamps: true})

const Task = mongoose.model("Task", taskSchema)

module.exports = Task