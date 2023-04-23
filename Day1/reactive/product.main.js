const ProductService = require('./product.service');


let ps = new ProductService();

//ps.findAllSync().forEach((e) => console.log(`${e.code},${e.name}`))


// ps.findAllASync().then((res) => {
//     console.log(res);
//     //console.log(res[0]);
// });


let s = ps.findAllAsyncOb().subscribe({
    next: (res) => {
        console.log(res);
        res.forEach((e) => console.log(`${e.code},${e.name}`));
    },
    complete: () => {
        s.unsubscribe();
        console.log('no more data...');
    }
});

// console.log('unsubscribing ....');
// s.unsubscribe();

