const mongoose = require("mongoose")
const express = require("express")
const Task = require("./task.js")


const app = express()
// Middleware to listen to json incoming request
app.use(express.json())
const PORT = process.env.PORT || 3000


const mongoDB="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"



// Connects with mongodb database then app listens to port 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log("Connected to db")
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    })
    .catch((err) => console.log(err))



// 
app.get("/api/tasks", (req, res) => {
    Task.find()
        .then(result => {
            res.json(result)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})


app.post("/api/tasks", (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    })
    task.save()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

app.get("/api/tasks/:id", (req, res) => {
    Task.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(err =>{
            res.status(400).send(err)
        })
})