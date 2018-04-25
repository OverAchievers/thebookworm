const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
userRouter.route("/user")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
userRouter.route("/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = userRouter;
