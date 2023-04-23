const express = require('express');
const cart = require('./cart/cart');
const app = express();

app.listen(3000, () => {
    console.log('server up-->3000');
});

app.get('/contactus', (req, res) => {
    res.sendFile(__dirname + '/contactus.html');
});

app.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html');
});

app.get('/cartvg', cart.vg);
app.get('/cartap', cart.ap);
