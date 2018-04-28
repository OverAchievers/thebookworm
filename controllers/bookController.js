const db = require("../models");
const axios = require("axios");

// Defining methods for the userController
module.exports = {
  create: function (req, res) {
    console.log("in create function");
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
  search: function (req, res) {
    if (isEmpty(req.query)) {
      console.log("query parms are not defined. So getting all books");
      db.Book
        .find()
        .sort({ date: -1 })
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    } else {
      console.log("query parms are defined");
      const zipcode = req.query.zipcode;
      const title = req.query.title;
      const author = req.query.author;
      const isbn = req.query.isbn;
      const desc = req.query.desc;

      let search = {};
      if (zipcode !== undefined) {
        search.zipcode = zipcode;
      }
      if (title !== undefined) {
        search.title = { $regex: new RegExp(".*" + title + ".*", "i") };
      }
      if (author !== undefined) {
        search.author = { $regex: new RegExp(".*" + author + ".*", "i") };
      }
      if (isbn !== undefined) {
        search.isbn = isbn;
      }
      if (desc !== undefined) {
        search.desc = { $regex: new RegExp(".*" + desc + ".*", "i") };
      }

      console.log(search);
      db.Book
        .find(search)
        .sort({ date: -1 })
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }

  },
  get: function(req, res){
    db.Book
    .find({ _id: req.params.id })
    .sort({ date: -1 })
    .then(dbModel => {
      console.log(dbModel);
      res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("in update");
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getISBNDetails: function (req, res) {

  }
};


function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}