const events = require('events');
let ev = new events.EventEmitter();

ev.on('placeorder', () => {
    console.log('processing order...');
});
ev.on('placeorder', () => {
    console.log('sending emails..');
});

ev.on('outofstock', (x,y) => {
    console.log('restocking...... ', x , y)
});

ev.emit('placeorder');
ev.emit('outofstock', 'arg1', 'arg2');
ev.emit('placeorder');



