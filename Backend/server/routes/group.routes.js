module.exports = (app) => {
 	const Group = require("../controllers/group.controller");

	app.post("/creategroup", Group.create); 
	app.post("/creategroupmessage", Group.createGroupMessage); 
	app.edit("/editgroup/:id", Group.edit)
  	app.get("/getgroupmessages/:groupId", Group.getGroupMessages); // get all messages in a group
  	app.get("/getgroups/", Group.getAllGroups);
  	app.get("/getgroup/:id", Group.findGroup);
};