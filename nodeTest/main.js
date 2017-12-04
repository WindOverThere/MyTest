// var fs = require("fs");

// var data = fs.readFileSync("input.txt");
// console.log(data.toString())
// console.log("结束了")

// var fs = require("fs");

// fs.readFile("input.txt", function (err, data){
// 	if(err) return console.error(err)
// 	console.log(data.toString())
// })

// console.log("结束了")




// var events = require("events");
// var eventEmitter = new events.EventEmitter();
// var connectHandler = function connected(){
// 	console.log("连接成功！")
// 	eventEmitter.emit("data_received")
// }
// eventEmitter.on("connection", connectHandler);
// eventEmitter.on('data_received', function(){
// 	console.log('数据接收成功。');
//  });
 
// eventEmitter.emit("connection")
// console.log("程序执行结束")



// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var listener1 = function  listener1(){
// 	console.log("监听器  listener1 执行")
// }
// var listener2 = function listener2(){
// 	console.log("监听器 listener2 执行")
// }
// eventEmitter.addListener('connection', listener1);
// eventEmitter.on('connection', listener2)

// var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + "个监听器监听链接事件。")

// eventEmitter.removeListener("connection", listener1);
// console.log("listener1 不再受监听。")
// eventEmitter.emit("connection");
// eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection')
// console.log(eventListeners + "个监听器监听连续事件。")
// console.log("程序执行完毕。")

// var events = require("events");
// var emitter = new events.EventEmitter();
// emitter.emit("error")


// function printHello(){
//     console.log("Hello World!")
// }
// setInterval(printHello, 2000)



//console
// console.info("程序开始执行")
// var counter = 10;
// console.log("计数：%d", counter)
// console.time("获取数据")
// console.timeEnd("获取数据")
// console.info("程序执行完毕。")


process.on("exit", function (code){
    setTimeout(function (){
        console.log("该代码不会执行")
    },0)
    console.log("推出码为：", code)
})
console.log("程序执行结束")