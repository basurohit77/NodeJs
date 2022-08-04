

const fs = require('fs');
const path = require('path');
const fn = path.join(__dirname, "out.txt");
fs.writeFile(fn, "Hello NodeJS!!!", () => {
    console.log('file created....')
});