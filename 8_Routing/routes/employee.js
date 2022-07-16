const path = require("path");
const express = require('express');
const router = express.Router();

const employeeData = require("../data/employees.json");

router.route("/").get((req,res)=>{
    debugger;
    res.json(employeeData);
});

module.exports = router;