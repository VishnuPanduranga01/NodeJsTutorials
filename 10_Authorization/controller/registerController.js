const userDB = {
    users :require("../model/users.json"),
    setUser: function(data){
        this.users = data
    }
};

const path = require("path");
const fs = require("fs");

// bcrypting passward
const bcrypt = require("bcrypt");

const handleRegisterUser = async (req,res)=>{
    const {user , pwd} = req.body;
    if(user && pwd){
        const duplicateUser = userDB.users.find(userObj=>userObj.userName ===user);
        if(duplicateUser){
            res.status(402).json("{this user already exists}")
        }
        else {
            const newUser = {
                userName :user,
                password: await bcrypt.hash(pwd,10)
            };
            userDB.setUser([... userDB.users , newUser]);
            fs.writeFileSync(path.join(__dirname,"..","model","users.json"), JSON.stringify(userDB.users),"utf-8");
            res.status(201).json("{new user has been created}")
        }

    }
    else {
        res.status(401).json("{'id':'user id and password required'}");
    }
};
module.exports= {handleRegisterUser };