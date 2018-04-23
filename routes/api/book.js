const bookRouter = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/book"
bookRouter.route("/book")
  .get(bookController.getAll)
  .post(bookController.create);

bookRouter.route("/book?user=&title=&zip=&author=")
  .get(bookController.search);

bookRouter.route("/book/:id")
  .get(bookController.get)
  .put(bookController.update)
  .delete(bookController.delete);  

bookRouter.route("/book/lookup/:isbn")
  .get(bookController.getISBNDetails);

module.exports = bookRouter;

