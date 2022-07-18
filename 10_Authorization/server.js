const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(__dirname));

app.use(express.json());
//register new user
app.use("/userRegister", require("./router/userRouter"));
//router
app.use("/employee", require("./router/employeeRoute"));

//login 
app.use("/login", require("./router/auth"));

app.listen(PORT,()=>{
    console.log('server listening on Port:' +PORT);
})