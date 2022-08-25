const cds = require("@sap/cds");
module.exports = cds.service.impl(async function(){
    const {Products} = this.entities;
    const service = await cds.connect.to("northwind")
    this.on("READ"  ,Products , async function(req) {
        let results =   await service.tx(req).run(req.query);
        return results.filter(obj =>{
            return obj.UnitPrice <= 10;
        });
    });
});