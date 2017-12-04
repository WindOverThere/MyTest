var Hello = require("./hello");
hello = new Hello()
hello.setName("BUdong")
hello.sayName()



var http = require("http")
http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Hello World")
    response.end()
}).listen(8888)
