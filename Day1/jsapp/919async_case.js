function demo(str) {
    console.log(str);
    console.log(str.toLowerCase());
}

function ucase(str, callback1) {
    setTimeout(() => {
        console.log(str, "...");
        callback1(str.toUpperCase(), "100");

    }, 500);
    return true;
}
let ack = ucase("ibm", (res, nos) => {
    demo(res);

});
if (ack) {
    console.log('Job Accepted...')
}
console.log('______');
console.log('______');
console.log('______');
console.log('______');




