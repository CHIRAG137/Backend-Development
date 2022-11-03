const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.write("<h1>My name is Chirag Goel</h1>");
 res.write("<h1>I am a sophomore at IIIT Ranchi</h1>");
 res.send();
});
app.listen(8000, "127.0.0.1", () => {
 console.log("Sent HTML Data");
});
