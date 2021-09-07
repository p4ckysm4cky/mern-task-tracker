const mongoose = require("mongoose")
const express = require("express")
const Task = require("./task.js")
const cors = require("cors")


const app = express()
// Middleware to listen to json incoming request
// app.use(cors())
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });



const PORT = process.env.PORT || 8000


const mongoDB="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"



// Connects with mongodb database then app listens to port 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log("Connected to db")
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    })
    .catch((err) => console.log(err))



// sends all task
app.get("/api/tasks", (req, res) => {
    Task.find()
        .then(result => {
            res.json(result)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// creates a new task
app.post("/api/tasks", (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        archive: req.body.archive
    })
    task.save()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

// sends task of a specified id
app.get("/api/tasks/:id", (req, res) => {
    Task.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})

// updates a task based on id
app.put("/api/tasks/:id", (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(result => {
        res.send(result)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})

// removes a task based on id
app.delete("/api/tasks/:id", (req, res) => {
    Task.findByIdAndDelete(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})