const http = require('http')

const hostname = '0.0.0.0';

const port = 10002;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Node Server 2');
  // console.log(JSON.stringify(req.headers));
})

server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`)
})