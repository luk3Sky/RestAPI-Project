var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users"
});

connection.connect(function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log("Connected!");
    });

module.exports = connection;