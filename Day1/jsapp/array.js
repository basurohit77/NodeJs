var nos = [10, 20, 30, 40, 50];
var i = 0;
//block scoped - es6
for (let i = 0; i < nos.length; i++) {
    console.log(nos[i]);
}

console.log(" i = " + i);