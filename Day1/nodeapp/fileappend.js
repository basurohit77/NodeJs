

const fs = require('fs');
const path = require('path');
const fn = path.join(__dirname, "out.txt");
fs.appendFile(fn, "Hello for Angular!!!", () => {
    console.log('content appended....')
});