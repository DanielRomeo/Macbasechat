const sql = require("./db");

class Message{
  
    constructor(message){
        this.message = teacher.message;
        this.sender_id = teacher.sender_id;
        this.reciever_id = teacher.reciever_id;
        this.date_created = teacher.date_created;
    }

    // create method:
    static create(newmessage, result) {
      sql.query("INSERT INTO messages SET ?", newmessage, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created message: ", { id: res.insertId, ...newmessage });
        result(null, { id: res.insertId, ...newmessage });
      });
    };

    // get all method: /*needs work*/
    static getAll(result){
      sql.query("SELECT * FROM messages", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
      console.log("teacher: ", res);
        result(null, res);
      });
    };

    // find an teacher by ID method:
    static findById(teacher, result){
      sql.query(`SELECT * FROM teachers WHERE id = ${teacher}`, (err: Error, res: any) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          console.log("found teacher: ", res[0]);
          result(null, res[0]);
          return;
        }
        result({ kind: "not_found" }, null);
      });
    };
} ;// end of the class:



module.exports ={Message}