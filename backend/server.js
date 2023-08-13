const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
//Create an instance of express application
const app = express();

dotenv.config();

//Create an API endpoint(route) with a callback fn executed on matching requests
app.get("/", (req, res) => {
    res.send("API is running");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    //req.params.id = id extracted from url
    // === : strict equality (type coercion - same data type for lhs and rhs)
    const note = notes.find((n) => n._id === req.params.id);
    
    //note: single object from array of objects(notes)
    res.send(note);
});

const PORT = process.env.PORT||5000;

//Create a web server and make it listen on port 5000 for incoming HTTP requests 
app.listen(PORT, console.log(`Server started on port ${PORT}`));
