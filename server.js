var http = require('http');

const VERSION = 2;

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World! Version is : ' + VERSION.toString());
};
var www = http.createServer(handleRequest);
www.listen(8080);