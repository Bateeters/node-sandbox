const fs = require ('node:fs');

const content = 'Some Content!';

// one of the easiest ways to write a file in Node is with the fs.writeFile() API
fs.writeFile('testB.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
});



// Here's an example of using the sync version
const contentB = 'Even MORE content!';

try {
    fs.writeFileSync('testBsync.txt', contentB);
    // file written successfully
} catch (err) {
    console.error(err);
}


// You can also use a promise-based version
const fsPromise = require ('node:fs/promises')

async function example() {
    try {
        const contentC = 'MORE promise-based content!'
        await fsPromise.writeFile('textBpromise.txt', contentC);
    } catch (err) {
        console.log(err)
    }
}

example();