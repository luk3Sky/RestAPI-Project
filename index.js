const express = require('express');
const router = require('./routes/api');

// Set up an express app
const app = express();

app.use('/api',router);

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests!');
});