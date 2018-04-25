const router = require("express").Router();
const userRouter = require("./user");
const bookRouter = require("./book");

// routes
router.use("/users", userRouter);
router.use("/books", bookRouter);

module.exports = router;
