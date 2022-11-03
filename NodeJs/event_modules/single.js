const EventEmitter = require('events');
const event = new EventEmitter();
event.on('SayYourName', () => {
 console.log("My name is Chirag Goel");
});
event.emit('SayYourName');