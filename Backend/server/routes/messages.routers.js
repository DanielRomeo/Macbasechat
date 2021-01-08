module.exports = (app) => {
  const Message = require("../controllers/message.controller");

  	app.post("/createmessage", Message.create); 
  	app.get("/getmessages/:userId1/:userId2", Message.getAll); // get all messages between 2 participants

	app.post("/creategroupmessage", Message.createGroupMessage); 
  
};