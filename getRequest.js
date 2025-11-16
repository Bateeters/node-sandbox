// importing node's built-in HTTPS module.
const https = require('https'); // lets us make HTTPS requests (port 443, encrypted).


// setting up object for outbound requests
// "Where am I sending the request and how?"
const options = {
    hostname: 'jsonplaceholder.typicode.com',   // the location we're requesting
    port: 443,                                  // 443 is the port for HTTPS
    path: '/todos/1',                           // a specific resource or endpoint
    method: 'GET',                              // HTTP method being used (GET, POST, PUT, etc.)
};


// creating the actual request object
const req = https.request(options, res => { // https.request() returns an object we can write to and listen for responses.
                                            // the second argument, "res", is a callback that runs when the server responds.
    
    // log the status code to console to know if it succeeded or failed.
    console.log(`statusCode: ${res.statusCode}`);

    // responses come in "chunks", this runs every time a chunk, "d", arrives.
    res.on('data', d => {

        // log the raw chunk to the console.
        process.stdout.write(d);
    });
});


// catching any errors that occur
req.on('error', error => {
    console.error(error);
});


// everything must be "ended" to actually send the request.
// "I'm done setting it up, now send it."
req.end();