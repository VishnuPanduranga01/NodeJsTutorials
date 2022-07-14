const fs = require("fs");
const fsPromises = require('fs').promises;
const {v4:uuid} = require('uuid');
const dateFNS = require("date-fns");
const path = require('path');

const logEvent = async (message) =>{
    const DateTime = dateFNS.format(new Date(), "dd-MMM-yyy\tHH-mm-ss");
    const id = uuid();
    const mesageInfo = `${DateTime}\t\t ${id} \t ${message}\n`
    console.log(mesageInfo)
    try{
        await fsPromises.appendFile(path.join(__dirname,"logFiles","log.txt"),mesageInfo);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {logEvent}