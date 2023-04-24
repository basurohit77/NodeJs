const express = require('express');
const app = express();

app.use("/", (req, res, next) => {
    console.log('Middleware One!!');
    next();
});

app.use("/cart", (req, res, next) => {
    let passcode = req.query.passcode;
    if (passcode == '123')
        next();
    else
        res.send('<h3> Invalid Passcode</h3>');
});
app.get('/', (req, res) => {
    res.send('<h3>Home!!</h3>')
});
app.get('/cart', (req, res) => {
    res.send('<h3>Cart!!</h3>')
});

app.get('/login', (req, res) => {
    res.send('<h3>Login!!</h3>')
});

app.use((req, res) => {
    res.send('<h3>Page Not Found!!</h3>')
});

app.listen(3000, () => {
    console.log('server is up@3000');
});
