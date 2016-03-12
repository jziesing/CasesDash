var pg = require('pg');

var db = {

  createDatabase: function(connectionString, dbName) {
    var client = new pg.Client(connectionString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
        return false;
      }
      client.query("SELECT 1 FROM pg_database WHERE datname=($1)", [dbName], function(err, res) {
        if(err) {
          return console.error("Database Exists Already : JZ", err);
          return false;
        }
        console.log("Database Available : JZ : " + res + " : " + dbName);
      });
      const querPram = "CREATE DATABASE " + dbName;
      client.query(querPram, function(err, res) {
        if(err) {
          return console.error("Error Making DB : JZ", err);
          return false;
        }
        console.log("Created Database : JZ : " + res + " : " + dbName);
        return true;
      });
    });
  },

  createTables: function(connectionString) {
    console.log("WHYYY got calleedd");
    var client = new pg.Client(connectionString);
    client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
        return false;
      }
      const querPram = "CREATE TABLE IF NOT EXISTS case(casenumber INT, name varchar(64), description varchar(64), caselink varchar(64), btlink varchar(64))";
      client.query(querPram, function(err, res) {
        if(err) {
          return console.error("Could not create table : JZ", err);
          return false;
        }
        console.log("Successful creation of table : JZ");
        return true;
      });
    });
  }

}

module.exports = db
