const express = require('express');
const router = express.Router();
// const User = require('../model/user');

// Get a list of users from  the db
router.get('/users', function (req, res, next) {
    console.log(req.body);
    res.send({type: 'GET'});
});

// Add a new user to the db
router.post('/users', function (req, res, next) {
    console.log(req.body);
    res.send({type: 'POST', name : req.body.name, age: req.body.age});    
});

// Update a user in the db
router.put('/users/:id', function (req, res, next) {
    console.log(req.body);
    res.send({type: 'PUT'});
});

// Delete a user from the db
router.delete('/users/:id', function (req, res, next) {
    console.log(req.body);
    res.send({type: 'DELETE'});
});

module.exports = router;