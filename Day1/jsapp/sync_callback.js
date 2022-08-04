function add(a, b, cb) {
    setTimeout(function () {
        cb(a + b);
    }, 3000);
}
//promise 
add(10, 20, function (res) {
    console.log(res);
});

console.log('______');
console.log('______');
