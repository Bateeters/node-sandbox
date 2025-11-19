// Example: Read a file and change its content and read
// it again using callback-based API.

/*
const fs = require('fs');

const fileName = 'test.txt';
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = 'Some content!';
  fs.writeFile(fileName, content, err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log('Wrote some content!');
    fs.readFile(fileName, 'utf8', (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});

The above may eventually rise a callback hell when too many nested callbacks are used.
*/


// Simply use a promise-based API to avoid it!
// See the below example:

// Import promise-based version of fs module
// Gives us async functions that return promises
const fs = require('fs/promises');

async function example() {
    // Define the file to read and write to
    const fileName = 'test.txt';

    try {
        // Reading the contents of the file
        // "utf8" tells Node to read the file as a string instead of raw bytes
        const data = await fs.readFile(fileName, 'utf8');
        console.log(data);  // This prints the original contents

        // Here we are defining new content to write to the file
        const content = 'Some content!';

        // Write the new content to the file
        // NOTE: if the file already exists, writeFile() overwrites it.
        await fs.writeFile(fileName, content);
        console.log('Wrote some content!'); // logging that content was written

        // Reading the file again to verify new contents
        const newData = await fs.readFile(fileName, 'utf8');
        console.log(newData);   // Printing the file contents

    } catch (err) {
        // Catching any error instead of crashing program.
        console.log(err);
    }
}

// Calling function so it actually runs when using "node fsPromise.js" terminal command
example();