const rxjs = require("rxjs");

class ProductService {
    prods = [
        { code: "1", name: 'Mouse', price: 200 },
        { code: "2", name: 'Keyboard', price: 400 },
    ]
    findAllSync() {
        return this.prods;
    }
    findAllASync() {
        let p = new Promise((resolve, reject) => {
            resolve(this.prods);
        });
        return p;
    }
    findAllAsyncOb() {
        let o = new rxjs.Observable((s) => {
            setTimeout(() => s.next([this.prods[0]]), 2000);
            setTimeout(() => s.next([this.prods[1]]), 4000);
            setTimeout(() => s.complete(), 4000);

        });
        return o;
    }
}

module.exports = ProductService;