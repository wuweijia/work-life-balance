var http = require('http');
var port = Math.round((Math.random() + 1) * 1000)
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('hello world')

}).listen(port, '127.0.0.1')
console.log(port);
