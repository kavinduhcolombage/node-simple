// Basic Hello World
console.log("Hello from Node.js!");

// Simple HTTP Server (optional)
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from your first Node.js server!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});