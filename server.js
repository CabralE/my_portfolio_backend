// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create our app object
const app = express();

// home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// route for retreving projects
app.get("/projects", (req, res) => {
    res.json(projects);
});

// route for retreiveing about info
app.get("/about", (req, res) => {
    res.json(about);
});

// declare a variable for our port num
const PORT = process.env.PORT || 4001;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on PORT  ${PORT}`));



