const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3050

app.get("/customers",(req,res)=>{
    res.json(require(path.join(__dirname,"customer")))
})

app.listen(PORT,()=>{
    console.log('Server running on : ' + 'http://localhost:'+3050)
})