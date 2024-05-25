const express = require("express");
const availabilityRouter = require("./availability");

const router = express.Router();

router.use("/availability", availabilityRouter);

module.exports = router;