const express = require('express');

// Set up an express app
const app = express();

app.get('/api', function ( request, response ) {
    console.log('GET in root route');    
    response.send(' { user: "New-one" } ');
    response.end();
});

app.listen(process.env.port || 4000, function () {
    console.log('Now listening for requests!');
});