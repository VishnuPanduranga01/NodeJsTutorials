const userDB = {
    users :require("../model/users.json"),
    setUser: function(data){
        this.users = data
    }
};

const bcrypt = require("bcrypt");
const e = require("express");

const handleLogin = async (req, res)=>{
    const {user,pwd} = req.body;
    if(user &&  pwd){
        const existuser = userDB.users.find(userObj=> userObj.userName ===user);
        if(existuser){
                const match = await bcrypt.compare(pwd,existuser.password);
                if(match){
                    res.json("Login success");
                }
                else{
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

module.exports = {handleLogin}