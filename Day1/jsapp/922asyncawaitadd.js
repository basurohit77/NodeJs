
async function add(a, b) {
    return a + b;
}
async function test() {
    let res = await add(10, 20);
    console.log(res);
}
// With Promise
// async function test() {
//     let res =   add(10, 20).then((res) => {
//         console.log(res);
//     }, (err) => {
//         console.log(err);
//     });
//     console.log("---test---");
//     console.log(res);
// }

test();
console.log('___________');
console.log('___________');
