const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
userRouter.route("/")
  .post(userController.create)

// Matches with "/api/user/:id"
userRouter.route("/:id")
  .get(userController.get)
  .put(userController.update)
  .delete(userController.delete);
   
module.exports = userRouter;

