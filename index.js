const http = require('http');
const fs = require('fs'); // File system module to read HTML file

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data); // Send the HTML file as the response
    }
  });
});

server.listen(3001, () => {
  console.log('Server running at http://localhost:3001/');
});