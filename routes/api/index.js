const router = require("express").Router();
const userRouter = require("./user");
const bookRouter = require("./book");

// routes
router.use("/user", userRouter);
router.use("/book", bookRouter);

module.exports = router;
