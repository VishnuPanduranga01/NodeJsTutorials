const path = require("path");
const express= require("express");
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 5050;

//json data
app.use(express.json());

app.use(express.static(__dirname));

//router
app.use("/employee", require("./routes/employee"));

app.listen(PORT,()=>{
    console.log("Server Running on Port:" + PORT);
})