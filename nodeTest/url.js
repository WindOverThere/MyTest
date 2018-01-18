// 'use strict'

// var url = require('url');

// console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));


// 'use strict'

// var path = require('path')
// var workDir = path.resolve('.');
// var filePath = path.join(workDir, 'pub', 'index.html')

// console.log(workDir, filePath)


'use strict'

var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.')
console.log('Static root dir: ' + root);
var server = http.createServer(function (request, response){
    console.log("abc is " + request, response)
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);
    fs.stat(filepath, function (err, stats){
        if( !err && stats.isFile() ){
            console.log('200' + request.url)
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response)
        }else{
            console.log('404' + request.url)
            response.writeHead(404)
            response.end('404 Not Found')
        }
    })
})

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/')

