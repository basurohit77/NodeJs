

const fs = require('fs');
const path = require('path');
const fn = path.join(__dirname, "msgs.txt");
//let data = fs.readFileSync(path.join(__dirname, "msgs.txt"));
let data = fs.readFileSync(fn);
console.log(data.toString());
console.log('................');