const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true }, (err, client) => {
    if (err)
        return console.log('Cannot connect to mongodb...');
    console.log('connected to MongoDB...');
    let db = client.db('productsdb');
    let collection = db.collection('products');
    collection.find({}, { _id: 0 }).toArray((err, data) => {
        console.log(data);
    });

})
