const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

// Set up an express app
const app = express();

// First middleware - body parser
app.use(bodyParser.json());

// Second middleware - express route
app.use('/api', routes);

// Third middleware - error handler
app.use(function(err, req, res, next) {
    console.log("error hanlded!");
    res.status(422).send({error:err.sqlMessage});
});

// API listening
app.listen(process.env.port || 5000, function () {
    console.log('Now listening for requests!');
});
