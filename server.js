// Required Modules
var express = require('express');
var db = require("./server/DBinit")

var app = express();
var port = process.env.PORT || 3000;
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
var dbName = "adbbb";

db.createDatabase(connectionString, dbName);
connectionString = "postgres://localhost:5432/" + dbName;
db.createTables(connectionString);

app.use('/', express.static(__dirname + '/client'));

app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});
