// exports.in = 'index'
// console.log("in index",module); require('./lib/util') 


/* const UTIL = require("./lib/util")
console.log("UTIL",UTIL)
setImmediate(() => {
    console.log('The index.js module object is now loaded!', module)
}) */

const {host, port} = require("./config")
console.log(`Server will run at http://${host}:${port}`);
