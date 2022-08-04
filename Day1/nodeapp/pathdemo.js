const path = require('path');

let fn = __dirname + "\\cmdline.js";
console.log(fn);
fn = path.join(__dirname, "cmdline.js");

console.log(fn);
