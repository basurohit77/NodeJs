const express = require('express');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
    res.render('home');
});


app.get("/topics", (req, res) => {
    res.render('topics', { tp: ['Angular', 'React', 'VUE'] });
});

app.get("/products", (req, res) => {
    res.render('products', {
        products: [{ code: '11', name: 'Mouse', price: 400 }, { code: '22', name: 'Keyboard', price: 400 }
        ]
    });
});


app.listen(3000, () => {
    console.log('server is up @ 3000');
});
