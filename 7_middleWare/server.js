const path = require('path');
const fs = require('fs')
const express = require('express');
const exp = require('constants');
const app = express();
const PORT = process.env.PORT || 9000

//custom lo events 
const logEvents = require("./middleWare/logEvents");


//built in middleware to handle unl encoded data
// in other words, form data;
// content-type: application/x-wwww-form-urlencoded
app.use(express.urlencoded({extended:false}));

//json data
app.use(express.json());

// to serve static files like css, image
app.use(express.static(path.join(__dirname)));

app.get("^/$|/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.get("/new-page(.html)?",(req,res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'))

})

//customm middle ware

app.use((req,res, next)=>{
    logEvents(req.headers.origin + req.url + "\t" +req.method , "reqLog.txt");
    console.log(req.url , + "\t" +req.method);
    next();
})

app.listen(PORT,()=>{
    console.log("Server is running om port 9000");
})