const express = require('express');
const con = require('./mysqlconfig');
const app = express();


app.get("/", (req, res) => {
    res.send("<h4>MySQL with  Express</h4>");
});
app.get("/products", (req, res) => {
    con.execute("select * from products").then(([rows]) => {
        res.status(200).json(rows);
    });
});


app.listen(3000, () => {
    console.log('server is up@3000');
})