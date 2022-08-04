const url = require('url');
let site = "hpp://www.amazon.in:8080?name=James&age=30";

let nurl = url.parse(site, true);
console.log("hostname:", nurl.hostname);
console.log(nurl.port);
console.log(nurl.query.name)
console.log(nurl.query.age)

