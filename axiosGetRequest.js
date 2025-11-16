// First you need to install axios:
// npm install axios

// Import Axios
const axios = require('axios');

// make a GET request to a specific server
axios
    .get('https://jsonplaceholder.typicode.com/todos/1')    // specified server 
    .then(res => {                                          // if the ".get" is successful, run the following
        console.log(`statusCode: ${res.status}`);           // log the status code
        console.log(res);                                   // log the entire response object. Includes data, status, headers, config, and more
    })

    // If the ".get" fails, run the .catch block
    .catch(error => {
        console.error(error);   // Log the error to help debug
    });