var http = require('http');
var fs = require('fs');
var server = http.createServer();
var settings = require('./settings');

var msg;

server.on('request',function(req,res){
	fs.readFile(__dirname + '/public_html/hello.html','utf-8',function(err,data){
		if (err){
	res.writeHead(404, {'content-Type':'text/plain'});
	res.write("not found");
	return res.end();
		}
	res.writeHead(200, {'content-Type':'text/html'});
	res.write(data);
	res.end();
	});
});

//server.listen(settings.port);
server.listen(settings.port);
console.log("server listening ...");
