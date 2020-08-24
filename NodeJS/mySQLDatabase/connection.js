var express = require('express');
var mysql=require('mysql');
var app=express();
console.log("1");
var connection=mysql.createConnection({
	host:'localhost',
    user:'root',
    password:'root',    
	database:'user'
});
console.log("2");
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

//   connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Dhairya', 'abc')";
//     connection.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

app.get("/", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM customers';
    connection.query(q, function (error, results) {
        if (error) throw error;
        var msg = "We have " + results[0].count + " users";
        res.send(msg);
    });
});

connection.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'ab'";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });
app.listen(3000,function(){console.log("Server running");});