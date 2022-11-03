const http = require('http');
const server = http.createServer((req, res) => {
 if (req.url == "/") {
  res.end("Home page");
 }
 else if (req.url == "/about") {
  res.end("About page");
 }
 else {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("404, Error page");
 }
});
server.listen(8080, "127.0.0.1", () => {
 console.log("Server has been created successfully");
});