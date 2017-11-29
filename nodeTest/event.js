// var EventEmitter = require("events").EventEmitter;
// var event = new EventEmitter();
// event.on("somevent", function (){
//     console.log("some_event 时间触发");
// });
// setTimeout(function (){
//     event.emit("somevent")
// }, 2000)

var events = require("events");
var emitter = new events.EventEmitter()
emitter.on("someEvent",function (arg1, arg2){
    console.log("listener1", arg1, arg2)
})
emitter.on("someEvent", function (arg1, arg2){
    console.log("listener2", arg1, arg2)
})
emitter.emit("someEvent", "arg1 参数", "arg2 参数")