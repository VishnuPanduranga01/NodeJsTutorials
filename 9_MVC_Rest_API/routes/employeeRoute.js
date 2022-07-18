const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");

router.route("/").get(
    employeeController.getEmployees
).post(employeeController.postEmployee);

router.route("/:id").get(employeeController.getEmployee).put(employeeController.updateEmployee).delete(employeeController.deleteEmployee);

module.exports = router;