const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(__dirname));

app.use(express.json());
//register new user
app.use("/userRegister", require("./router/userRouter"));
//router

//login 
app.use("/login", require("./router/auth"));

// verify jwt
const jwtMiddelWare = require("./middelWare/JwtVerify");
app.use(jwtMiddelWare);
app.use("/employee", require("./router/employeeRoute"));



const randomeBytes = require("crypto").randomBytes(64).toString('hex');
console.log(randomeBytes);

app.listen(PORT,()=>{
    console.log('server listening on Port:' +PORT);
})