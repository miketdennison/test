// jshint esversion:6

// DEPENDENCiES
const express = require("express");
const path = require("path");
const app = express();

// PORT
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
//urlendoced
//express.json
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/bye", function (req, res) {
    res.sendFile(path.join(__dirname, "views/bye.html"));
});

// LISTENING
app.listen(PORT, function () {
    console.log("connected on: " + PORT);
});