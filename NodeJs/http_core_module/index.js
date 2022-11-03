const http = require('http');
const server = http.createServer((req, res) => {
 res.end("This is my own web server");
});
server.listen(8000, "127.0.0.1", () => {
 console.log("Server is successfully made");
});