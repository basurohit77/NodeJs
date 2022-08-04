const express = require('express');

const app = express();

app.use((req, res, next) => {
    if (req.query.secret == "123")
        next();
    else
        res.send("Invalid req....")
});

app.get("/", (req, res) => {
    res.send("<h3>Middleware Demo</h3>")

});

app.get("/hello", (req, res) => {
    res.send("<h3>Hello World!!</h3>")

});


app.listen(3000, () => {
    console.log('server is up @ 3000');
});

