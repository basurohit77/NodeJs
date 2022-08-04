function greet() {
    let p = new Promise((resolve, reject) => {
        resolve("Hello World!!");
    });
    return p;
}
greet().then((res) => {
    //runs once....
    console.log(res);
});
console.log('__________');
console.log('__________');