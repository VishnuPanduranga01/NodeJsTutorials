const express = require("express");
const router = express.Router();
const controller = require("../controller/registerController");

router.post("/",controller.handleRegisterUser);

module.exports = router;