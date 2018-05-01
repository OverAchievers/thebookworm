const bookRouter = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
bookRouter.route("/")
  .get(bookController.search)
  .post(bookController.create);

// Matches with "/api/books/<id>"
bookRouter.route("/:id")
  .get(bookController.get)
  .put(bookController.update)
  .delete(bookController.delete);

// Matches with "/api/books/isbn/<id>"
bookRouter.route("/isbn/:isbn")
  .get(bookController.getISBNDetails);

bookRouter.route("/user/:user")
  .get(bookController.getUser);

module.exports = bookRouter;
