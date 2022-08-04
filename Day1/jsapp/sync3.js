function add(a, b) {
    setTimeout(function () {
        return a + b;
    }, 0);
}
let res = add(10, 20);//blocking 
console.log(res);
console.log('______');
console.log('______');
