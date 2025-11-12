#!/usr/bin/env node

/*
the above shebang line is used to tell the OS which interpreter to use for running this script file
the shebang needs to be the first line in a file 
*/

/*
to use a shebang, you need to give the file executable permission.
to do this, you can use the following terminal command (make sure you are in the same directory with the file):

chmod u+x helloWorld.js

*/



console.log("Hello from Node!");



/* 
use the following command in the terminal to run this script:

node helloWorld.js

*/



/*
using -e (or --eval) will run whatever follows in "" as JavaScript.
for example, running the following will do exactly as expected:

node -e "console.log(123)"

*/



/*
to restart the application when a file changes, use the following (you can close out of this with ctrl + c):

node --watch helloWorld.js

*/


/*
the package.json file is where you can declare dependencies and other important parts of your app.
for example, the scripts section holds specified commands.

using --run allows you to use one of these specified commands.

for example, we have updated our package.json file's scripts section with "test": "node -e 'console.log(123)".
using the following and see what happens:

node --run test
*/



/*
Let's look further into the scripts object of package.json.
we have added both a "start" and a "dev" key.
*/

/*
Let's start with the... "start" portion.
we have added the original "node helloWorld.js" code to this so now you can run the following and get the same result:

node --run start

Super simple and easy to understand, right?
*/

/*
Now for the "dev" key.
this may look partially familiar right?
you have the start command we just setup and talked about (node --run start) but what about the "-- --watch" part?
you may be thinking "wait, we talked about --watch already right?"

Yes we did!
The "--" allows us to add another argument to the end of a previous command.
In this case, we are just adding the "--watch" argument to the end of what we already have defined in the "start" key.
*/

/*
So, to wrap it all up, we use the following to run the app as normal:

node --run start


And the following would use the above "start" command as well as whatever argument is defined after using the "-- --another-argument"

node --run dev
*/