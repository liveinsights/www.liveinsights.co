const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      contentTypes = require('./utils/content-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;

let server = http.createServer(function (req, res) {
	let url = req.url;
	if (url == '/') {
		url += 'index.html';
	}

	// IMPORTANT: Your application HAS to respond to GET /health with status 200
	//            for OpenShift health monitoring
	if (url == '/health') {
		res.writeHead(200);
		res.end();
	} else if (url.indexOf('/info/') == 0) {
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Cache-Control', 'no-cache, no-store');
		res.end(JSON.stringify(sysInfo[url.slice(6)]()));
	} else {
		if (!req.url.match(/\.well-known\/acme-challenge/)){
			res.writeHead(403);
			res.end('Illegal address');
		} else {
			var filepath = '../data/' + req.url;
			fs.readFile(filepath, function (err, data){
				if(err){
					res.writeHead(404);
					res.end('File not found');
				}else{
					res.writeHead(200, {'Content-Type' : 'text'});
					res.end(data, 'utf-8');
				}
			});
		}    
	}
});

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
	console.log(`Application worker ${process.pid} started...`);
});
