const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
userRouter.route("/")
  .get(userController.search)
  .post(userController.create);

// Matches with "/api/users/:id"
userRouter.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = userRouter;
