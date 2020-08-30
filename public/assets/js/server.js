/* DEPENDENCIES */
const express = require('express');
var path = require('path');



var notesArray = require("./db/db.json");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


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