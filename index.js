const express = require('express');
const bodyParser = require('body-parser');

// Set up an express app
const app = express();

// Add middleware 
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests!');
});