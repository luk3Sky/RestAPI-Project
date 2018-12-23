const express = require('express');
const router = express.Router();
// const User = require('../model/user');

const connection = require('../database/config');

// Get a list of users from  the db
router.get('/users', function (req, res, next) {
    let que = `SELECT * FROM users.STUDENT;`;
    let result = connection.query(que, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
});

// Add a new user to the db
router.post('/users', function (req, res, next) {
    console.log(req.body);
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    if (req.body.type == "student") {
        let result = connection.query("INSERT INTO users.STUDENT(FName, LName) VALUES(?, ?)",[firstname,lastname], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            res.send(results);
        });
    } else {
        let result = connection.query("INSERT INTO users.TEACHER(FName, LName) VALUES(?, ?)",[firstname,lastname], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            res.send(results);
        });      
    }
});

// Update a user in the db
router.put('/users/:id', function (req, res, next) {
    console.log(req.body);
    res.send({type: 'PUT'});
});

// Delete a user from the db
router.delete('/users/:id', function (req, res, next) {
    console.log(req.body);
    if (req.body.type == "student") {
        let result = connection.query("DELETE FROM users.STUDENT WHERE STUDENT_ID = ?",[req.params.id], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            (results.affectedRows == 0 ) ? res.send("Deletion unsuccessful!") : res.send("Deletion successful!");
        });
    } else {
        let result = connection.query("DELETE FROM users.TEACHER WHERE Teacher_ID = ?",[req.params.id], (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            (results.affectedRows == 0 ) ? res.send("Deletion unsuccessful!") : res.send("Deletion successful!");
        });
    }
});

module.exports = router;