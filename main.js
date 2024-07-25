const http = require('node:http');
const fs = require('node:fs');

function handler (req, res) {
  const headers = req.headers;
  console.log(headers['user-agent']);
  console.log(headers.host);
  

  if (req.method === 'POST') {
    let file = '';
    
    req.setEncoding('utf8');

    req.on('data', chunk => {
      file += chunk;
    });

    req.on('end', () => {
      fs.writeFileSync('./www' + req.url, file);
      res.writeHead(201);
      res.end();
    });

  } else if (req.method === 'GET') {
    const filePath = './www' + (req.url === "/" ? '/index.html' : req.url);
    if (fs.existsSync(filePath) && !fs.statSync(filePath).isDirectory()) {
      const x = fs.readFileSync(filePath, 'utf8')
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(x);
    } else {
      res.writeHead(404)
      res.end();
    }
  }

}
// Create a local server to receive data from
const server = http.createServer(handler);

server.listen(3000);