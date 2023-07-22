const express = require('express');
const app = require('./app'); // Adjust the path based on your project structure

const server = express();

// Use the app middleware in your serverless function
server.use('/', app);

exports.handler = (event, context, callback) => {
  // This is the main handler function that Netlify will call
  // It is responsible for serving the request to your Express app
  const handler = serverless(app);

  // Run the Express app
  handler(event, context, callback);
};
