var http = require('http');

// http.createServer(function (request, response){
// 	response.writeHead(200, {'Content-Type': 'text/plain'});
// 	request.on('data', function (chunk){
// 		response.write(chunk)
// 	});
// 	request.on('end', function (){
// 		response.end()
// 	})
// }).listen(80)



// http.get('http://www.example.com/', function (response){
// 	var body = [];

// 	console.log(response.statusCode);
// 	console.log(response.headers);

// 	response.on('data', function (chunk){
// 		body.push(chunk);
// 	});

// 	response.on('end', function (){
// 		body = Buffer.concat(body);
// 		console.log(body.toString());
// 	});
// })


// var options = {
// 	key: fs.readFileSync('./ssl/default.key'),
// 	cert: fs.readFileSync('./ssl/default.cer')
// }
// var server =  https.createServer(options, function (request, response){
// 	//...
// })

// querystring.parse()
// querysring.stringify()

http.createServer(function (request, response){
	var i = 1024,
		data = '';

	while (i--) {
		data += '.'
	}
	if((request.headers['accept-encoding'] || '').indexOf('gzip') !== -1){
		zlib.gzip(data, function (err, data){
			response.writeHead(200, {
				'Content-Type': 'text.plain',
				'Content-Encoding': 'gzip'
			});
			response.end(data)
		});
	} else {
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		})
		response.end(data)
	}
}).listen(80)