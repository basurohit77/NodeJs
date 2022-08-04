const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "styles")));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('<h3>Static HTML Demo</h3>');
});

app.get("/products", (req, res) => {
    res.redirect("products.html");
});

app.post("/checklogin", (req, res) => {
    if (req.body.login == "John" && req.body.password == "123")
        res.redirect("welcome.html");
    else
        res.send("Invalid Login/Password");

});

app.listen(3000, () => {
    console.log('server is up @ 3000');
});
