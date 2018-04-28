const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
userRouter.route("/")
  .get(userController.search)
  .post(userController.create)

// Matches with "/api/users/:id"
userRouter.route("/:id")
  .get(userController.get)
  .put(userController.update)
  .delete(userController.delete);
   
module.exports = userRouter;

