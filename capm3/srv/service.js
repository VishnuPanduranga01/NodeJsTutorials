const dateFNs = require("date-fns")

module.exports = (srv)=>{
    srv.on("getDate",()=>{
        return dateFNs.format(new Date, 'dd-MMM-yyyy');
    });

    srv.on("getUserByProject", async req=>{
        const {id} = req.data;
        const db = srv.transaction(req);
        const {Users} = srv.entities;
        const result = await db.read(Users).where({project_id:id});
        return result
    });

    srv.on("updateUserProject", async req =>{
        const {userId,projectId} = req.data;
        const db = srv.transaction(srv);
        const {Users} = srv.entities;
      const result =   await db.update(Users).set({project_id:projectId}).where({id:userId});
      console.log(JSON.stringify(result));
        return {
            code: 200,
            updated:true,
            message:"Updated successfully",
        }
    })
}