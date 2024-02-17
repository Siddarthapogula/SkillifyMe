const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const folioRouter = require("./folio");

router.use("/user", userRouter);
router.use("/folio", folioRouter );

module.exports = router;
