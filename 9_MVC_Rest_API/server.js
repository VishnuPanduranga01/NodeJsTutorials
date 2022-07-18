const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());

app.use(express.static(__dirname));

//router
app.use("/employee", require("./routes/employeeRoute"));

app.listen(PORT,()=>{
    console.log("server running on Port:"  + PORT);
})
