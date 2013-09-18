var http = require('http');

var server = http.createServer(function(req, res) {
  	console.log('Serving request', new Date());
	res.writeHead(200);
  	res.end('Hello Http');
});
server.listen(8080);
