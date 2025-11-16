/* 
Note about PUT and DELETE requests:

They utilize the same POST request format,
you just need to change the options.method value to your desired method.
*/


const https = require('https');

// convert the JS object, "data", into a JSON string.
const data = JSON.stringify({
    title: 'Hello World... Again!',
    body: 'This is another test POST request to make sure things work.',
    userId: 72
})

// configure object for HTTPS request
const options = {
    hostname: 'jsonplaceholder.typicode.com',   // server we're sending request to
    port: 443,                                  // 443 = HTTPS
    path: '/todos',                             // API endpoint that accepts POST requests
    method: 'POST',                             // HTTP method (POST = create/send data)

    // additional metadata sent along with the request
    headers: {
        'Content-Type': 'application/json',     // tells server our data is JSON
        'Content-Length': data.length,          // required so server knows how much data to expect
    },
};


// Creating the actual HTTPS request that runs after server responds.
const req = https.request(options, res => {

    // log status to console
    console.log( `statusCode: ${res.statusCode}`);

    // when we receive data chunks...
    res.on('data', d => {
        process.stdout.write(d);    // ...log each chunk
    });
});


// handle any errors (log them so we can debug)
req.on('error', error => {
    console.log(error);
});


// Send our JSON data as the body of the POST request
req.write(data);


// finish request to send it.
req.end();