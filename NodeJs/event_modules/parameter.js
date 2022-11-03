const EventEmitter = require('events');
const event = new EventEmitter();
event.on('SayYourName', (sc, msg) => {
 console.log(`The status code is ${sc} and message is ${msg}`);
});
event.emit('SayYourName', 200, "ok done");