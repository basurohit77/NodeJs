
const db = require('../mysqlconfig');
//const products = require("../data");

function productsController(req, res) {
    db.execute('select * from products').then(([rows, fields]) => {
        res.render('products', { products: rows })
    });
}

module.exports = productsController; 