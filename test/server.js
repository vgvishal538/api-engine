// const express = require("express"),
//   app = express(),
//   port = process.env.PORT || 3000,
//   mongoose = require("mongoose"),
//   Task = require("./api/models/todoListModel"),
//   bodyParser = require("body-parser");

// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost/Tododb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// var routes = require("./api/routes/todoListRoutes"); //importing route
// routes(app);

// app.listen(port);

// console.log("todo list RESTful API server started on: " + port);

const express = require('express')
const app = express()

app.get("/", (req, res) =>{
    res.send("Hello world")
})

app.listen(3000);
