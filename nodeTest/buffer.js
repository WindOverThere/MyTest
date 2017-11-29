// var buf = new Buffer(10)

// var buf = new Buffer([10,38,9])

// buf.write(string[, offset[, length]][, encoding])



// buf = new Buffer(26);

// for (var i = 0; i < 26; i++){
//     buf[i] = i + 97
// }

// console.log(buf.toString('ascii'));
// console.log( buf.toString('ascii',0,5));
// console.log( buf.toString('utf8',0,5));
// console.log( buf.toString(undefined,0,5));



// var buf = new Buffer('www.runoob.com')
// var json = buf.toJSON(buf);
// console.log(json)


/* var buffer1 = new Buffer('风不动 ')
var buffer2 = new Buffer('www.runoob.com')
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容：" + buffer3.toString()) */

var fs = require("fs");
var data = "";
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8')
readerStream.on("data", function (chuck){
    data += chuck;
})
readerStream.on("end",function (){
    console.log(data)
})
readerStream.on("error",function (err){
    console.log(err.stack)
})
console.log("程序执行完毕");

