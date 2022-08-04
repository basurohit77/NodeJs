const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    res.write("<h3>Hello HTTP!!</h3>");
    res.write("<h3>Hello IBM!!</h3>");
    res.end();
});

server.listen(3000, () => {
    console.log('server is up @:3000');
});


