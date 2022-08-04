
const bcrypt = require("bcryptjs");
module.exports = (srv)=>{
    
    srv.before('CREATE', async res=>{
        const salt = await  bcrypt.genSalt(10);
        const { password } = res.data;
        res.data.password = await bcrypt.hash(password,salt);
    })
}