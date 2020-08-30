/* DEPENDENCIES */
const express = require('express');
var path = require('path');

var notesArray = require("./db/db.json");

/* SETS UP THE EXPRESS APP */
var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static(__dirname + '/public'));

/* STARTS THE SERVER TO BEGIN LISTENING */
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});


app.get("/api/notes", function (req, res) {
    return res.json(notesArray);
});



// Route for saving a note to db.json
app.post("/api/notes", function (req, res) {

    let newNoteRequest = req.body;
    console.log(newNoteRequest);

    notesArray.push(newNoteRequest);
    res.sendStatus(200);
});