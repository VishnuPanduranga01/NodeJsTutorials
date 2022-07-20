const express = require("express");
const router = express.Router();
const controller = require("../controller/authcontroller");

router.post("/",controller.handleLogin);

module.exports = router;