const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up an express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/userhandle', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Add middleware - body parser
app.use(bodyParser.json());

// Add middleware - error handler
app.use(function(err, req, res, next) {
    console.log(err.ValidationError);
}); 

app.use('/api',require('./routes/api'));

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests!');
});