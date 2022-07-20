const userDB = {
    users: require("../model/users.json"),
    setUser: function (data) {
        this.users = data
    }
};

const bcrypt = require("bcrypt");
const e = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config({path:'../.env'});
const fs = require("fs");
const path = require("path");

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (user && pwd) {
        const existuser = userDB.users.find(userObj => userObj.userName === user);
        if (existuser) {
            const match = await bcrypt.compare(pwd, existuser.password);
            if (match) {
                // jwt access
                const accessToken = jwt.sign(
                    { userName: user },
                    process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET :"426c795bd87b74d3063dc7044be1882d390452de6a0789a116e3b28e6be715931cd87f7e79a75f37726c0057d58c4566f914403ba98716f2aa7ae653ed4d9d94" ,
                    { expiresIn: '30s' }
                )
                const refreshToken = jwt.sign(
                    { userName: user },
                    process.env.REFRESH_TOKEN_SECRET ? process.env.REFRESH_TOKEN_SECRET : "78299067da9cfc5eb55dc1fe455bfbae1258edb8cb992bc1c5a4db3b59cb913f3372e24ce2d4fb4ebb8848184364d39205947a41a18389fa8a35d25a1f2b57e5" ,
                    { expiresIn: '1d' }
                )
                const otherUsers = userDB.users.filter(userObj=>{return userObj.userName !==user});
                const currentUser = { ...existuser , refreshToken};
                userDB.setUser([ ...otherUsers, currentUser]);
                fs.writeFileSync(path.join(__dirname,"..","model","users.json"),JSON.stringify(userDB.users));        
                res.cookie("jwt", refreshToken,{httpOnly:true, maxAge:24*60*60*1000} )       
                res.json({accessToken});
            }
            else {
                res.status(401).json("invlaif Passowrd");
            }
        }
        else {
            res.status(401).json("{user doent exit}");
        }
    }
    else {
        res.status(401);
    }
}

module.exports = { handleLogin }