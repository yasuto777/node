var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var server = http.createServer();
var settings = require('./settings');
var templete = fs.readFileSync(__dirname + '/public_html/hello.ejs','utf-8');
var n = 0;

server.on('request',function(req,res){
	n++;
	var data = ejs.render(templete,{
		title : "hello",
			content : "<strong>World!</strong>",
			n : n
	});
	res.writeHead(200, {'content-Type':'text/html'});
	res.write(data);
	res.end();
});

//server.listen(settings.port);
server.listen(settings.port);
console.log("server listening ...");
