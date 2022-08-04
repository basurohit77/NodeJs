const fs = require('fs');
const path = require('path');
const fn = path.join(__dirname, "msgs.txt");

fs.readFile(fn, (err, data) => {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log('.............');