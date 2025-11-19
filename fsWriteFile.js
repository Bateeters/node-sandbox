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