const yargs = require('yargs').argv;

if (yargs.op == "add")
    console.log(parseInt(yargs.n1) + parseInt(yargs.n2));
if (yargs.op == "mul")
    console.log(parseInt(yargs.n1) * parseInt(yargs.n2));
    
// node cmdline.js --op=add --n1=4 --n2=5