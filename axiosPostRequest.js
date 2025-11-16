// Look at axiosGetRequest.js file for full comment notes.

/* 
Note about PUT and DELETE requests:

They utilize the same POST request format,
you just need to change the options.method value to your desired method.
*/

const axios = require ('axios');

axios
    // the URL we are sending the data to
    .post('https://jsonplaceholder.typicode.com/todos', {
        // the body (payload) of the POST request
        title: 'Hello World',
        body: 'This is a test POST request',
        userId: 13
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data);  // using res.data to only return the object's data rather than the ENTIRE object
                                // remove ".data" to see what the whole object looks like (it's A LOT).
    })
    .catch(error => {
        console.error(error)
    });