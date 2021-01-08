const Users = require("./tables/createTable.users");
const Messages = require("./tables/createTable.messages");
const Groups = require("./tables/createTable.groups");
const mysql = require("mysql");
const dbConfig = require("./db.config");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
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
	createTable(Users.createUsers, "Successfully created the users table");
	createTable(Messages.createMessages, "Successfully created the messages table");
	createTable(Groups.createGroup, "Successfully created the createGroup table");
	createTable(Groups.createGroupMessages, "Successfully created the createGroupMessages table");

});