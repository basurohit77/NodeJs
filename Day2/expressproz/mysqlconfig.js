const mysql = require('mysql2');
let dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ibmnode'
});
module.exports = dbpool.promise();

