const fs = require('node:fs');

const content = "Let's add even MORE content!";

fs.appendFile('file.log', content, err => {
    if (err) {
        console.error(err);
    } else {
        // done!
    }
});


// Here is the sync version
// NOTE: if "node fsAppend.js" terminal command is ran, this Sync version will append/write first
// BECAUSE Sync calls jump the queue and stop EVERYTHING until it is finished, regardless of order.
const contentB = "Need MORE...";

try {
    fs.appendFileSync('file.log', contentB);
} catch (err) {
    console.error(err);
}


// And the promise-based version
const fsPromise = require('node:fs/promises');

async function example() {
    try {
        const contentC = 'MOOOOOOOOOORE!';
        await fsPromise.appendFile('file.log', contentC);
    } catch (err) {
        console.log(err);
    }
}

example();