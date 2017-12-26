// 'use strict';
// var http = require('http');
// http.createServer(function (request, response){
//     console.log(request)
// 	response.writeHead(200,{'Content-Type': 'text/plain'})
// 	response.end('hello!!! world\n')
// }).listen(8888)
// console.log("Server running at http://127.0.0.1:8888/")


// var http = require("http")
// var url = require("url")

// function start(route) {
// 	function onRequest(request, response){
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("Request for " + pathname + " received.")

// 		route(pathname);

// 		response.writeHead(200, {"Content-Type": "text/plain"})
// 		response.write("Hello World")
// 		response.end()
// 	}
// 	http.createServer(onRequest).listen(8888)
// 	console.log("Server has started.")
// }
// exports.start = start;



// var fs = require('fs');
// function copy(src, dst){
// 	fs.createReadStreem(src).pipe(fs.createWriteStream(dst))
// }
// function main(argv) {
// 	copy(argv[0], argv[1]);
// }
// main(process.argv.slice(2))

// var bin = new Buffer([0x48, 0x65, 0x6c, 0x6c, 0x6c ]);
// var dup = new Buffer(bin.length);
// bin.copy(dup)
// dup[0] = 0x68;
// console.log(bin);
// console.log(dup);



// var rs = fs.creatReadStream(src);
// rs.on('data', function (chunk){
// 	rs.psuse();
// 	doSomething(chunk, function (){
// 		rs.resume()
// 	})
// })

// rs.on('end', function (){
// 	cleanUp();
// })


// function travel(dir, callback){
// 	fs.readdirSync(dir).forEach(function (file){
// 		var pathname = path.join(dir, file)
// 		if(fs.statSync(pathname).isDirectory()){
// 			travel(pathname, callback)
// 		}else{
// 			callback(pathname)
// 		}
// 	})
// }


function readText(pathname){
	var bin = fs.readFileSync(pathname);
	if(bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF){
		bin = bin.slice(3)
	}
	return bin.toString('utf-8')
}
var iconv = require('iconv-lite')
function readGBKText(pathname){
	var bin = fs.readFileSync(pathname);

	return iconv.decode(bin, 'gbk');
}
