const express = require('express');
const router = express.Router();

// get a list of users from  the db
router.get('/users', function (req, res) {
    console.log(req);
    res.send({type: 'GET'});
});

// add a new user to the db
router.post('/users', function (req, res) {
    console.log(req);
    res.send({type: 'POST'});
});

// update a new user in the db
router.put('/users/:id', function (req, res) {
    console.log(req);
    res.send({type: 'PUT'});
});

// delete a new user in the db
router.delete('/users/:id', function (req, res) {
    console.log(req);
    res.send({type: 'DELETE'});
});

module.exports = router;