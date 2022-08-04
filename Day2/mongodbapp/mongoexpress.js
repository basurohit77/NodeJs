const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true }, (err, client) => {
    if (err)
        return console.log('Cannot connect to mongodb...');
    console.log('connected to MongoDB...');

    app.listen(3000, () => {
        console.log('server is up @ 3000');
        db = client.db('ibmdb');
    });
});
app.get("/", (req, res) => {
    res.send('<h3>Welcome to Mongo!!</h3>');
});
app.get("/products", (req, res) => {
    db.collection("products").find({}).project({ _id: 0 }).toArray((err, p) => {
        res.status(200).json(p);
    });
});
