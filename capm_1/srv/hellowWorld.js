
const getName  = (srv)=>{
    srv.on("getName",(req,res)=>{
       return "Hey " + req.data.msg
    })
}

module.exports = getName;