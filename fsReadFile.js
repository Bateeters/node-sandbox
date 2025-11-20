/*
NOTE: When reading a file, the entire file will be read before continuing.
This means if the file is large, it will take more time to read.
It will also take more memory consumption and therefore impact speed of the program.

To get around this, use streams to read the file content.
See the "fsReadStreams.js" file for further information.
*/

const fs = require('node:fs');

// the easiest way to read a file is using fs.readFile()
// pass the file path, encoding, and 
// a callback function that will be called with the file data (and the error)
fs.readFile('readTest.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// here is the sync version
try{
    const data = fs.readFileSync('readTestSync.txt', 'utf8')
    console.log(data);
} catch (err) {
    console.error(err);
}

// here is the promise-based method
const fsPromise = require('node:fs/promises');

async function example() {
    try {
        const data = await fsPromise.readFile('readTestPromise.txt', {encoding:'utf8'});
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

example();