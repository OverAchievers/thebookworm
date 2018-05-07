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
      db.Book
        .find()
        .populate({ path: "user"})
        .sort({ date: -1 })
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
      } else {
      const any = req.query.any;
      const zipcode = req.query.zipcode;
      const title = req.query.title;
      const author = req.query.author;
      const isbn = req.query.isbn;
      const desc = req.query.desc;

      let search = {};
      if(any !== undefined){
        let orSearch = [];
        orSearch.push({"zipcode" : { $regex: new RegExp(".*" + any + ".*", "i") }});
        orSearch.push({"title" : { $regex: new RegExp(".*" + any + ".*", "i") }});
        orSearch.push({"author" : { $regex: new RegExp(".*" + any + ".*", "i") }});
        orSearch.push({"isbn" : { $regex: new RegExp(".*" + any + ".*", "i") }});
        // orSearch.push({"desc" : { $regex: new RegExp(".*" + any + ".*", "i") }});
        console.log(orSearch);
        db.Book
        .find()
        .or(orSearch)
        .populate({ path: "user"})
        .sort({ date: -1 })
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
      } else{
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

        db.Book
          .find(search)
          .sort({ date: -1 })
          .then(dbModel => {
            res.json(dbModel);
          })
          .catch(err => res.status(422).json(err));
      }

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
  getUser: function(req, res){
    db.Book
    .find({user:req.params.user})
    .sort({date:-1})
    .then(dbModel=> {
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
