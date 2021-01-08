const sql = require("./db");

class Group{
  
    constructor(group){
        this.created_id = group.created_id;
        this.name = group.name;
        this.description = group.description;
        this.date_created = group.date_created;
    }

    // create method:
    static create(newgroup, result) {
      sql.query("INSERT INTO messages SET ?", newgroup, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, { id: res.insertId, ...newgroup });
      });
    };

    // create group message method:
    static create(newgroupmessage, result) {
      sql.query("INSERT INTO group_messages SET ?", newgroupmessage, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, { id: res.insertId, ...newgroupmessage });
      });
    };


    // get all groups
    static getAll(result){
      sql.query("SELECT * FROM groups", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        result(null, res);
      });
    };

    // get all messages from a group
    static getGroupMessages = (result) => {
      sql.query(`SELECT * FROM teachers WHERE id = ${teacher}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          result(null, res[0]);
          return;
        }
        result({ kind: "not_found" }, null);
      });
    };


};



module.exports ={Group}