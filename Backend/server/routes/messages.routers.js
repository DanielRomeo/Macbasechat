import from "express";


module.exports = (app) => {
  const Message = require("../controllers/teacher.message");
  
  app.post("/createmessage", Message.create); 	
  app.post("/deletemessage", Message.delete);
  app.get("/getmessages/:userId1/:userId2", Message.getall); // get all messages between 2 participants
};