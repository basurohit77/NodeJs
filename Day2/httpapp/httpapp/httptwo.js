const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    let nurl = url.parse(req.url, true);
    //res.write(`<h4>Welcome ${nurl.port}</h4>`);
    res.write(`<h4>Welcome ${nurl.query.name}</h4>`);
    console.log(nurl);
    res.end();
});

server.listen(3000, () => {
    console.log('server is up @:3000');
});



