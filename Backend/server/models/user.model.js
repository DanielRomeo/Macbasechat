const sql = require("./db");

class User{
   
    constructor(user){
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.username = user.username;
        this.password = user.password;
        this.date_created = user.date_created;
    }

    // create method:
    static create(newuser, result) {
      sql.query("INSERT INTO users SET ?", newuser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created student: ", { id: res.insertId, ...newuser });
        result(null, {success: "true"})
      });
    };

    // get all users:
    static getAll(result){
      sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
      console.log("student: ", res);
        result(null, res);
      });
    };

    // find an user by ID method:
    static findById(userId, result){
      sql.query(`SELECT * FROM users WHERE id = ${userId}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result({success: "false", message: "user not found"}, null);
          return;
        }
        if (res.length) {
          result(null, {success: "true"});
          return;
        }
        result({ kind: "not_found" }, null);
      });
    };

    // login the user:
    static login(obj, result){
      sql.query(`SELECT * FROM users WHERE username = ${obj.username} AND password = ${obj.password}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result({success: false,   message: "wrong parameters provided"}, null);
          return;
        }
        if (res.length) {
          result(null, {success: "true", "result": res[0]});
          return;
        }
        result({ kind: "not_found" }, null);
      });
    };

    static delete(userId, result){
      sql.query(`DELETE FROM users WHERE id = ${userId}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result({success: false,   message: "wrong parameters provided"}, null);
          return;
        }
        if (res.length) {
          result(null, {success: "true"});
          return;
        }
        result({ kind: "not_found" }, null);
      });
    };

    

} ;// end of the class:
