const events = require('events');
const eventEmiite = new events.EventEmitter();
const {logEvent} = require("./events");

//Initiating Event  listener
eventEmiite.on('listen',()=>{
    console.log("listening")
});
eventEmiite.on('logData',logEvent);

//emmiting event
eventEmiite.emit('listen');
eventEmiite.emit('logData','Message by me');


