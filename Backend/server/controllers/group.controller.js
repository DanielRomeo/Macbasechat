const Group = require("../models/group.model");

// create a group
exports.create = ((req, res) => {
	  if (!req.body) {
	    res.status(400).send({
	      message: "Content can not be empty!"
	    });
      	console.log("empty")
	  }

	  const group = new Group({
  		sender_id: req.body.sender_id,
  		reciever_id: req.body.reciever_id,
      	message: req.body.message
	  });

	  console.log('body is ',req.body);
	  Group.create(teacher, (err, data) => {
	    if (err)
	      res.status(500).send({
	        message:
	          err.message || "Some error occurred while creating the Message."
	      });
	    else res.send(data);
	  });
});

// create a group message:
exports.createGroupMessage = ((req, res) =>{
	if (!req.body) {
		res.status(400).send({
		  message: "Content can not be empty!"
		});
		console.log("empty")
	}
	const message = new GroupMessage({
		sender_id: req.body.sender_id,
		group_id: req.body.group_id,
		message: req.body.message,
		date_created: req.body.date_created
	});
	Group.create(teacher, (err, data) => {
	if (err)
	  res.status(500).send({
	    message:
	      err.message || "Some error occurred while creating the Message."
	  });
	else res.send(data);
	});
});

// get all group messages , given a group id
exports.getGroupMessages = (req, res) =>{
	Group.getGroupMessages(req.params.userId1, req.params.userId2, (err , data ) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found`
        });
      } else {
        res.status(500).send({
          message: "Server Error"
        });
      }
    } else res.send(data);
  });
};

// get all groups:
exports.getAllGroups = () =>{

};

// edit a group
exports.edit = () =>({

});
