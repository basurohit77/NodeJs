const con = require('./dbconfig');

function findAll() {
    con.execute('select * from city limit 10').then(([rows, fields]) => {
        rows.forEach((c) => {
            console.log(c.ID + " :" + c.Name + " : " + c.CountryCode);
        });
    });
}

function findById(id) {
    con.execute('select * from city where id = ?', [id]).then(([rows, fields]) => {
        console.log(rows);
    });

}

module.exports = { findAll, findById };

