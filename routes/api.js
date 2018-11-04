const express = require('express');
const router = express.Router();
const User = require('../model/user');

// get a list of users from  the db
router.get('/users', function (req, res) {
    console.log(req.body);
    res.send({type: 'GET'});
});

// add a new user to the db
router.post('/users', function (req, res) {

    User.create(req.body).then(function(user) {
        res.send( user
            // {
            // type: 'POST',
            // name: req.body.name,
            // age: req.body.age,
            // skill: req.body.skill    
            // }
        );
    });
    // Need to check whether the following is working
    // var user = new User(req.body);
    // user.save();
    // console.log(req.body);    
    
});

// update a new user in the db
router.put('/users/:id', function (req, res) {
    console.log(req.body);
    res.send({type: 'PUT'});
});

// delete a new user in the db
router.delete('/users/:id', function (req, res) {
    console.log(req.body);
    res.send({type: 'DELETE'});
});

module.exports = router;