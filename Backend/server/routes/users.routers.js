module.exports = (app) => {
  const User = require("../controllers/user.controller");

  app.post("/login",User.login );
  app.post("/createuser", User.create); 
  // app.put("/edituser", User.edit);
  app.delete("/deletuser/:userId", User.delete); 
  app.get("/getuser/:userId", User.findOne); 
  app.get("/getusers", User.findAll); 
};
