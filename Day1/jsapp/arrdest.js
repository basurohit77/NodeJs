let nos = [10, 20, function () {
    console.log('Hello!!')
}, 30, 40];
let [a, b, c] = nos;
console.log(nos);
console.log(a);
console.log(b);
c();

