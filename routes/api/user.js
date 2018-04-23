const userRouter = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
userRouter.route("/user")
  .post(userController.create)

// Matches with "/api/user/:id"
userRouter.route("/user/:id")
  .get(userController.get)
  .put(userController.update)
  .delete(userController.delete);
   
module.exports = userRouter;

