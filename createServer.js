const http = require('http');

// Creating new HTTP server
const server = http.createServer((req, res) => {


    // Set the HTTP status code and response headers
    // 200 = OK
    // 'Content-Type': 'application/json' tells the client we are sending JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });


    // End response and send data back ot client as JSON string
    res.end(JSON.stringify({ 
        title: 'Hello World!',
        body: 'Testing body to make sure everything works... as usual.',
        userId: 13 
    }));
})

// run "node createServer.js" and data (response) will be viewable on localhost:8000
server.listen(8000);