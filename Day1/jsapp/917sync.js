function add(a, b) {
    for (let i = 0; i < 10000000000; i++) {

    }
    return a + b;
}
let res = add(10, 20);//blocking 
console.log(res);
console.log('______');
console.log('______');
