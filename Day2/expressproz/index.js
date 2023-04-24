const express = require('express');
const path = require('path');
const loginController = require('./controllers/loginController');
const productsController = require('./controllers/products.controller');
const users = require('./user');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));
app.listen(8001, () => {
    console.log('server is up(3000)')
});

app.get("/", (req, res) => {
    res.render('home', { user: 'Guest' });

});

app.get("/products", productsController);
app.get("/signin", (req, res) => {
    res.render('signin', { err: '' }) 

});
app.post("/checklogin", loginController);