const date = require('date-fns');
//date formate
console.log(date.format(new Date(), 'dd-MMM-yyy \t hh:mm:ss'));
//UUID
const uuid = require("uuid");
console.log(uuid.v4());
