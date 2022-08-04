const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    let nurl = url.parse(req.url, true);
    console.log(nurl.pathname);
    if (nurl.pathname == "/home") {
        let fn = path.join(__dirname, "assets", "home.html");
        let data = fs.readFileSync(fn);
        res.write(data);
        res.end();
    }
    else if (nurl.pathname == "/products") {
        let fn = path.join(__dirname, "assets", "products.html");
        let data = fs.readFileSync(fn);
        res.write(data);
        res.end();
    }

});

server.listen(3000, () => {
    console.log('server is up @:3000');
});


