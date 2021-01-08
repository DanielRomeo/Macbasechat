const Message = require("../models/message.model");
const Group = require("../models/group.model");

exports.create = ((req, res) => {
	  if (!req.body) {
	    res.status(400).send({
	      message: "Content can not be empty!"
	    });
      	console.log("empty")
	  }

	  const message = new Message({
  		sender_id: req.body.sender_id,
  		reciever_id: req.body.reciever_id,
      	message: req.body.message
	  });

	  console.log('body is ',req.body);
	  Message.create(teacher, (err, data) => {
	    if (err)
	      res.status(500).send({
	        message:
	          err.message || "Some error occurred while creating the Message."
	      });
	    else res.send(data);
	  });
});

// gets all users:
exports.getAll = (req , res ) => { 
  Message.findById(req.params.userId1, req.params.userId2, (err , data ) => {
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

