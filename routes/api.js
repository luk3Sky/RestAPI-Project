const express = require('express');
const router = express.Router();

// get a list of users from  the db
router.get('/users', function (req, res) {
    console.log(req.body);
    res.send({type: 'GET'});
});

// add a new user to the db
router.post('/users', function (req, res) {
    console.log(req.body);    
    res.send({
            type: 'POST',
            name: req.body.name,
            age: req.body.age,
            // skill: req.body.skill    
    });
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