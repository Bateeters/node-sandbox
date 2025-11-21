const EventEmitter = require('events');

const door = new EventEmitter();

// .addListener() is the same as .on()
door.addListener('knock', () => {
    console.log('Knock Knock!');
})

door.on('answer', () => {
    console.log("Who's there?")
})

// .emit() will emit the specified event in the order they were registered.
// think of it as running the event(s)
door.emit('knock');

// .eventNames() returns an array of strings that represent the events registered on the current EventEmitter object
console.log(`A list of events on "door": ${door.eventNames()}`);

// .getMaxListeners() gets the max amount of listeners one can add to an EventEmitter object.
// This defaults to 10 but can be increased or lowered by using setMaxListeners()
console.log(`Max amount of listeners for "door": ${door.getMaxListeners()}`);

// .listenerCount() gets the count of listeners of the event passed as a parameter:
console.log(`Number of listeners for the "knock" event: ${door.listenerCount('knock')}`)

// .listeners() returns an array of listeners of the passed event
console.log(`List of listeners for the "knock" event: ${door.listeners('knock')}`)

// .once() adds a callback function that's called when an event is emitted for the first time after registering this.
// This callback is only going to be called once, never again.
const ee = new EventEmitter();

ee.once('my-event', () => {
    console.log("this one only run's once.")
})

ee.emit('my-event');

/*
.prependListener():
when you add a listener using "on" or "addListener", it's added last in the queue of listeners, and called last.
this adds and calls it before other listeners.
*/

// .prependOnceListener(): same as ".prependListener()" but it is only called once.

// .removeListener() AND .off() will remove a specific listener.
// you can do this by saving the callback function to a variable, when added, so you can reference it later:
const doSomething = () => {};

door.on('open', doSomething);
console.log(`New list of events on "door": ${door.eventNames()}`)

door.removeListener('open', doSomething);
console.log(`Even more recent list of events on "door": ${door.eventNames()}`)


// .removeAllListeners() removes all the listeners of an EventEmitter object listening to a specific event:
// you can add parameters to target specific event or you can leave empty to target ALL
door.removeAllListeners('knock');
console.log(`A list of events on "door" after using .removeAllListeners: ${door.eventNames()}`)

// .setMaxListeners() sets the maximum number of listeners available for an EventEmitter
// (default is 10 but it can be increased or lowered)
console.log(`max listeners: ${door.getMaxListeners()}`)
door.setMaxListeners(50);
console.log(`new max listeners: ${door.getMaxListeners()}`)