const db = require('./mysqlconfig');

db.execute('select * from products limit 2').then(([rows, fields]) => {
    rows.forEach((p) => {
        console.log(`${p.id} : ${p.name} : ${p.price} : `)
    });
    db.end();
});
