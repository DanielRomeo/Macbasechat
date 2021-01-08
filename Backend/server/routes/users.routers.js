module.exports = (app) => {
  const User = require("../controllers/user.controller");

  app.post("/createuser", User.create); 
  app.post("/deletuser", User.delete); 
  app.get("/getuser/:userId", User.findOne); 
  app.get("/getusers", User.findAll); 
};
