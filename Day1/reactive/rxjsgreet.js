const rxjs = require('rxjs');
function greet() {
    let o = new rxjs.Observable((s) => {
        setTimeout(() => {
            s.next('Hello World!!');
            //s.error('connection problem!')
        }, 1000);

        setTimeout(() => {
            s.next('Hello IBM!!');
        }, 2000);
        setTimeout(() => {
            s.next('Hello Reactive Prg!!')
        }, 3000);
        setTimeout(() => {
            s.complete();
        }, 4000);

    });
    return o;
}
let s = greet().subscribe({
    next: (res) => {
        //reacts
        console.log(res);
    },
    complete: () => {
        console.log('The End...');
        s.unsubscribe();
    },
    error: (err) => {
        console.log(err);
    }
});
console.log('____________');


