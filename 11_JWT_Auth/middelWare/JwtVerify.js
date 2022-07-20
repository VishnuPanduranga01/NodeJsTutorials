const jwt = require("jsonwebtoken");
require("dotenv").config({path:'../.env'});

const verifyJWT = (req, res, next)=>{
    const authHeader = req.headers['authorization']; // Bearer token
    if(!authHeader) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : "426c795bd87b74d3063dc7044be1882d390452de6a0789a116e3b28e6be715931cd87f7e79a75f37726c0057d58c4566f914403ba98716f2aa7ae653ed4d9d94" ,
        (err, decoded)=>{
            if(err) return res.sendStatus(403);
            req.user = decoded.username;
            next();
        }
    )


}

module.exports = verifyJWT;