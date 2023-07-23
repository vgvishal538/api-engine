// const express = require('express');
// const app = require('../../app'); // Adjust the path based on your project structure

// const server = express();

// // Use the app middleware in your serverless function
// server.use('/', app);

// exports.handler = (event, context, callback) => {
//   // This is the main handler function that Netlify will call
//   // It is responsible for serving the request to your Express app
//   const handler = serverless(app);

//   // Run the Express app
//   handler(event, context, callback);
// };

const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel"),
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/todoListRoutes"); //importing route
routes(app);

app.listen(port);

// console.log("todo list RESTful API server started on: " + port);
