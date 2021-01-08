const sql = require("./db");

class Message{
  
    constructor(message){
        this.message = teacher.message;
        this.sender_id = teacher.sender_id;
        this.reciever_id = teacher.reciever_id;
        this.date_created = teacher.date_created;
    }

    // create a message:
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
    static getAllFromUser(userId1, userId2, result){
      sql.query(`SELECT * FROM messages WHERE sender_id=${userId1} AND reciever_id=${userId2}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        result(null, res);
      });
    };

    
};



module.exports ={Message}