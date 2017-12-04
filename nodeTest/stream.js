// var fs = require('fs')
// var readerStream = fs.createReadStream("input.txt")
// var writeStream = fs.createWriteStream("output.txt")
// readerStream.pipe(writeStream)
// console.log("程序执行完毕")

// 压缩文件
// var fs = require("fs")
// var zlib = require("zlib")
// fs.createReadStream("input.txt")
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream("input.txt.gz"))

// console.log("文件压缩完成")


//解压文件
var fs = require("fs")
var zlib = require("zlib")
fs.createReadStream("input.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('inputjieya.txt'));
console.log("文件解压完成")