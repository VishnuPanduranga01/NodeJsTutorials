const fs = require('fs');
const path = require('path');
const date = require('date-fns');
const uuid = require('uuid');

const logEvents = async (message, logName) => {
    const dataTime = date.format(new Date(), 'dd-MMM-yyyy\t HH-mm-ss');
    const messageInfo = `${dataTime} \t ${uuid.v4()}  \t ${message} \n`
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
        fs.mkdirSync(path.join(__dirname, "..", "logs"))
    }
    fs.appendFileSync(path.join(__dirname, "..", "logs", logName), messageInfo);

}

module.exports = logEvents;