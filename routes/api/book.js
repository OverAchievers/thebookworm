const bookRouter = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/book"
bookRouter.route("/")
  .get(bookController.getAll)
  .post(bookController.create);

bookRouter.route("/?user=&title=&zip=&author=")
  .get(bookController.search);

bookRouter.route("/:id")
  .get(bookController.get)
  .put(bookController.update)
  .delete(bookController.delete);  

bookRouter.route("/lookup/:isbn")
  .get(bookController.getISBNDetails);

module.exports = bookRouter;

