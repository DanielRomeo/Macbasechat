// import queries:
import {createUsers} from "./tables/createTable.users";
import {createMessages} from "./tables/createTable.messages";

// import mysql functions:
const mysql = require("mysql");
const dbConfig = require("./db.config");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// connect to the MySQL server
connection.connect((err) => {
	if (err) {
		return console.error('error: ' + err.message);
	}
	const createTable = (query, msg) =>{
		connection.query(query, function(err, results, fields) {
			if (err) {
				console.log(err.message);
			}else{
				console.log(msg);
			}
		});
	}

	console.log("Successfully connected to the database.");
	createTable(createUsers, "Successfully created the users table");
	createTable(createMessages, "Successfully created the messages table");
});