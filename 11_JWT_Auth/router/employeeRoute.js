const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");
const jwtMiddelWare = require("../middelWare/JwtVerify");

// jwt veryfying
router.route("/").get( jwtMiddelWare, 
    employeeController.getEmployees
).post(employeeController.postEmployee);

router.route("/:id").get(employeeController.getEmployee).put(employeeController.updateEmployee).delete(employeeController.deleteEmployee);

module.exports = router;