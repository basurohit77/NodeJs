const mysql2 = require('mysql2');
let dbpool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ibmdb'
});

module.exports = dbpool.promise();

