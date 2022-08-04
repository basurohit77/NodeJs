const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('<h3>Welcome to Express</h3>');
});

app.get("/ibm", (req, res) => {
    res.send('<h3>Welcome IBM!!</h3>');
});

app.get("/greet", (req, res) => {
    res.send(`<h3>Welcome ${req.query.name}!!</h3>`);
});

app.get("/hello/:nm", (req, res) => {
    res.send(`<h3>Welcome ${req.params.nm}!!</h3>`);
});

app.listen(3000, () => {
    console.log('server is up @ 3000');
});
