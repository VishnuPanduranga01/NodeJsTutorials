const employeeData = 
{
    employees :require("../model/employee.json"),
    setEmployee : function (data){
        this.employees = data}
}
const fs = require('fs');
const path = require('path');
const date = require('date-fns');
const uuid = require("uuid");
const { json } = require("stream/consumers");

//get All employees
const getEmployees = (req, res) => {
    res.json(employeeData.employees);
}

//post employee
const postEmployee = (req, res) => {
    if (req.body.firstName && req.body.lastName) {
        const employee = {
            id: uuid.v4(),
            createdOn: new Date(),
            updatedOn: new Date(),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        employeeData.employees.push(employee);
        employeeData.setEmployee(employeeData.employees);
        fs.writeFileSync(path.join(__dirname, "..", "model", "employee.json"), (JSON.stringify(employeeData.employees)), 'utf-8');
        res.status(201).json(employeeData.employees)
    }
    else {
        const errData = {
            msg: "FirstName and last name required"
        }
        res.status(404).json(errData);
    }
};

//update Employee
const updateEmployee = (req,res)=>{
  const emp1 =  employeeData.employees.map(emp=>{
        if(emp.id ==  req.params.id){
            emp.lastName =  req.body.lastName;
            emp.firstName= req.body.firstName;
        }
        return emp;
    });
    employeeData.setEmployee(JSON.parse(JSON.stringify(emp1)));
    fs.writeFileSync(path.join(__dirname, "..", "model", "employee.json"), (JSON.stringify(employeeData.employees)), 'utf-8');
    res.status(201).json(employeeData.employees)
};

//delete Employee
const deleteEmployee = (req,res)=>{
    debugger;
    const employee = employeeData.employees.filter(emp => { return emp.id !== req.params.id});
    employeeData.setEmployee(JSON.parse(JSON.stringify(employee)));
    fs.writeFileSync(path.join(__dirname, "..", "model", "employee.json"), (JSON.stringify(employee)), 'utf-8');
    res.json(employee);
}

//single Employee
const getEmployee = (req, res) => {
    const employee = employeeData.employees.find(emp => { return emp.id === req.params.id });
    res.json(employee);
}



module.exports = { getEmployees, postEmployee, getEmployee , updateEmployee ,deleteEmployee};