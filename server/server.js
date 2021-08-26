//create express app
var express = require("express")
var app = express();

//use cors middleware
var cors = require('cors');
const { request, response } = require("express");
app.use(cors());

//use express json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

var data = require("./data.js");

var dashboard = require("../client/src/components/dashboard.js");
var profile = require("../client/src/components/profile.js");
var login = require("../client/src/components/login.js");
var timetable = require("../client/src/components/timetable.js");

app.use(express.static('public'));
//add routes here

app.get("/" , (request , response) => {
    response.json();
});

app.get("/api/login" , (request , response) => {
    response.json(login);
});

app.get("/api/dashboard" , (request , response) => {
    response.json(dashboard);
});

app.get("/api/profile" , (request , response) => {
    response.json(profile);
});
app.get("/api/timetable" , (request , response) => {
    response.json(timetable);
});

app.get('/api/slots', function (request, response) {
    var weekDays = +request.query.room;

    if (weekDays !== null) {
        for (var i = 0; i < data.slots.length; i++) {
            if (data.slots[i].id === weekDays) {
                response.json(data.slots[i]);
            }
        }
    } else
    {
        response.json(data.slots);
    }
});

app.get('/api/classes/:id', function (request, response) {
    var id = request.params.id;
    var classes = null;

    for (var i = 0; i < data.classes.length; i++) {
        if (data.classes[i].id === parseInt(id)) {
            classes = data.classes[i];
            response.json(classes);
        }
    }

    if (exercise == null)
        response.status(404).json("No exercise with id '" + id+ " found.");
})






//listen on port 5000
app.listen(5000, () =>{
    console.log("Listing on port 5000")
})