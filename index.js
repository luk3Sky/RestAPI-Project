const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
// const mongoose = require('mongoose');

// Set up an express app
const app = express();

// Connect to mongodb
// mongoose.connect('mongodb://localhost/userhandle', { useNewUrlParser: true });
// mongoose.Promise = global.Promise;

// Add middleware - body parser
app.use(bodyParser.json());

// Add middleware - error handler
app.use(function(err, req, res, next) {
    console.log(err.ValidationError);
}); 

// Use express route
app.use('/api', routes);

// API listening
app.listen(process.env.port || 5000, function () {
    console.log('Now listening for requests!');
});
