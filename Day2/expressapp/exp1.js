const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("<h3>Express Application</h3>");
});
app.get("/welcome", (req, res) => {
    //res.send("<h3>Welcome " + req.query.name + "," + req.query.city + "</h3>");
    res.send(`<h3> Welcome  ${req.query.name} , ${req.query.city} </h3> `);
});

app.get("/products", (req, res) => {
    res.send(`<h3>Product</h3>`);
});

app.get("/products/:id", (req, res) => {
    res.send(`<h3>Product : ${req.params.id}</h3>`);
});
app.listen(3000, () => {
    console.log('server is up@3000');
});
