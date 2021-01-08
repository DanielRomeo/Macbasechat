const User = require("../models/user.model");

exports.create = ((req, res ) => {
	  if (!req.body) {
	    res.status(400).send({
	      message: "Content can not be empty!"
	    });
      	console.log("empty")
	  }
	  const user = new User({
  		firstname: req.body.firstname,
  		lastname: req.body.lastname,
      username: req.body.username,
  		password: req.body.password,
      date_created: req.body.date_created
	  });

	  User.create(user, (err, data) => {
	    if (err)
	      res.status(500).send({
          success: "false",
	        message:
	          err.message || "Some error occurred while creating the User."
	      });
	    else res.send(data);
	  });
});

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        success: "false",
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: "false",
          message: `Not found`
        });
      } else {
        res.status(500).send({
          success: "false",
          message: "Error retrieving "
        });
      }
    } else res.send(data);
  });
};

exports.login = ((req, res)=>{
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
        console.log("empty")
    }

    const obj= {
      username: req.body.username,
      password: req.body.password
    }

    User.login(obj, (err, data) => {
      if (err)
        res/*.status(500)*/.send({
          success: "false",
          message: /*err.message ||*/ "wrong username or password"
        });
      else res.send(data);
    });
});

// the method isint written yet
exports.edit = ((req, res) =>{
  if(!req.body ) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
        console.log("empty")
    }

    const obj= {
      username: req.body.username,
      password: req.body.password
    }

    User.login(obj, (err, data) => {
      if (err)
        res/*.status(500)*/.send({
          success: "false",
          message: /*err.message ||*/ "wrong username or password"
        });
      else res.send(data);
    });
});

exports.delete = ((req, res) => {
  User.delete(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          success: "false",
          message: `Not found`
        });
      } else {
        res.status(500).send({
          success: "false",
          message: "Error retrieving "
        });
      }
    } else res.send(data);
  });
});

