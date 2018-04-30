const db = require("../models");
const axios = require("axios");

// Defining methods for the userController
module.exports = {
  create: function(req, res) {
    db.User
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  get: function(req, res) {
    console.log(req.params.id);
    db.User
      .find(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));    
  },
  update: function(req, res) {
  },
  delete: function(req, res) {
  },
  search: function(req, res){
    var email = req.query.email;

    db.User.find({ 'email': email }, function (err, user) {
      if (err) return handleError(err);
      // 'athletes' contains the list of athletes that match the criteria.
      res.json(user);   
    });
    
    
    // db.User
    //   .find(\\{'email': email})
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));    


  }    
};


