const con = require('./mysqlconfig');
function findAll() {
    con.execute("select * from products").then(([rows, cols]) => {
        rows.forEach((p) => {
            console.log(p);
        });
    });
}
function findByCode(code) {
    con.execute("select * from products where code = ?", [code]).then(([rows, cols]) => {
        rows.forEach((p) => {
            console.log(p);
        });
    });
}

function save(p) {
    con.execute("insert into products values(?,?,?)", [p.code, p.name, p.price]).then(res => {
        console.log("saved..." + p)
    });
}


function del(id) {
    //lab 
}
//findAll();
//findByCode(11);
/*
let p = { code: '333', name: 'Mug', price: 300 };
save(p);
*/
