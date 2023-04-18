
async function add(a, b) {
    return a + b;
}
async function test() {
    let res = await add(10, 20);
    console.log(res);
}
test();
console.log('___________');
console.log('___________');
