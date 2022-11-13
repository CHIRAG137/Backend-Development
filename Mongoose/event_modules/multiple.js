const EventEmitter = require('events');
const event = new EventEmitter();
event.on('SayYourName', () => {
 console.log("My name is Chirag Goel");
});
event.on('SayYourName', () => {
 console.log("I am a sophomore at IIIT Ranchi");
});
event.emit('SayYourName');