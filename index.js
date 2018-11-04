const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up an express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/userhandle');
mongoose.Promise = global.Promise;

// Add middleware 
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests!');
});