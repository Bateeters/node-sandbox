// EventEmitter lets you create and work with custom events.
const EventEmitter = require('node:events');

// create a new EventEmitter instance.
// this allows you to create and work with custom events.
const eventEmitter = new EventEmitter();


// register an event listener for an event called "start"
// the callback function runs whenever "start" is emitted.
eventEmitter.on('start', () => {
    console.log('started');
})

// Emit (or trigger) the "start" event.
eventEmitter.emit('start');



// Register a listener that expects a single argument.
eventEmitter.on('startB', number => {
    console.log(`started version B ${number}`);
})

eventEmitter.emit('startB', 23);



// Register a listener that expects multiple (2) arguments.
eventEmitter.on('startC', (start, end) => {
    console.log(`started version C from ${start} to ${end}`);
});

eventEmitter.emit('startC', 1, 100);


/*
EventEmitter also exposes several other methods outside of ON and EMIT:
.once()                 -   add a one-time listener
.removeListener()       -   remove an event listener from an event
.removeAllListeners()   -   remove all listeners for an event
*/