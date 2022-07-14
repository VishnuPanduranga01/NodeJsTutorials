const events = require('events');
const eventEmiite = new events.EventEmitter();
const {logEvent} = require("./events");

//Initiating Event 
eventEmiite.on('logData',logEvent);

//emmiting event
eventEmiite.emit('logData','Message by me');


