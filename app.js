require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3500;

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error',(errorMessage)=>{
    console.log(errorMessage)
})
db.once('open',()=>console.log("Connected Successfully to the database...."))

app.use(express.json())
// Todo Schema
const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model('Todo', todoSchema);

// Middleware
app.use(express.json());

// Routes
app.get('/api/todos', (req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json('Error: ' + err));
});

app.post('/api/todos', (req, res) => {
  const text = req.body.text;
  });

  

// Start the server
app.listen(port)
