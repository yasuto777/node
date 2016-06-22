var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var qs = require('querystring');

var server = http.createServer();
var settings = require('./settings');
var templete = fs.readFileSync(__dirname + '/public_html/bbs.ejs','utf-8');
var posts = [];

function renderForm(posts,res){
	var data = ejs.render(templete,{
		posts: posts
	});
	res.writeHead(200, {'content-Type':'text/html'});
	res.write(data);
	res.end();
}

server.on('request',function(req,res){
	if(req.method === 'POST'){
	req.data = "";
	req.on("readable",function(){
		req.data += req.read();
	});
	req.on("end",function(){
	var query = qs.parse(req.data);
	posts.push(query.name);
	renderForm(posts,res);
	});
	}else{
	renderForm(posts,res);
	}

});

//server.listen(settings.port);
server.listen(settings.port);
console.log("server listening ...");
