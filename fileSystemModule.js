// requiring the fs module to be able to use it within this file
const fs = require('fs');

/*
async API used with a callback, i.e. "err => {}"
this block renames the file "before.json" to "after.json"
if an error is returned, it will be logged.
*/ 
fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }

  // done
});


/*
sync API used with a try/catch block to handle errors
renames the file "after.json" to "newBefore.json"
if an error is thrown, the catch block will handle it.
This method (Sync) will block until the operation completes.
*/
try {
  fs.renameSync('after.json', 'newBefore.json');
  // done
} catch (err) {
  console.error(err);
}

/*
Start create a file named "before.json" in the folder
run the terminal command "node fileSystemModule.js" twice
the first time you run it, you will get before -> after.json
the second time, you will get after -> newBefore.json
*/

