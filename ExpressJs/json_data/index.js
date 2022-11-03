const { json } = require('body-parser');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.json([{
  id: 1,
  name: "Chirag",
 }, {
  id: 2,
  name: "Ankit",
 }]);
});
app.listen(8000, "127.0.0.1", () => {
 console.log("Sent JSON Data");
});
