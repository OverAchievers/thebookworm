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
  getAll: function (req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function (req, res) {
  },
  get: function (req, res) {
  },
  update: function (req, res) {
  },
  delete: function (req, res) {
  },
  getISBNDetails: function (req, res) {

  }
};