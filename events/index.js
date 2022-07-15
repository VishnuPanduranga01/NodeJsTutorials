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

//with time out
setTimeout(()=>{
    eventEmiite.emit('logData','Message by me');
},2000);



