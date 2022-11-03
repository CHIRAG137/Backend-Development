const express = require('express');
const app = express();
app.get("/", (req, res) => {
 res.send("This is Home Page");
});
app.get("/about", (req, res) => {
 res.send("This is About Page");
});
app.get("/footer", (req, res) => {
 res.send("This is Footer Page");
});

app.listen(8080, "127.0.0.1", () => {
 console.log("Routing done.");
});