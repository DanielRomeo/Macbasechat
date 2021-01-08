// const Admin:any = require("../models/admin.model");
import {Request, Response} from "express";
import Teacher from "../models/teacher.model";


exports.create = (req, res) => {
	  // Validate request
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
};


exports.findAll = (req, res) => {
  Message.getAll((err, data)  => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Teachers."
      });
    else res.send(data);
  });
};


// Find a single Teacher with a teacherId
exports.findOne = (req , res ) => {
  Messgae.findById(req.params.teacherId, (err , data ) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Teacher with id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};
