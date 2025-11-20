/*
IMPORTANT NOTE: you need to add the line:

"type": "module"

inside the package.json file for this to work!
*/

// import the filesystem module
import fs from 'fs';

// import promise-based version of stream.pipline
// pipeline(stream1, stream2) lets you pipe streams with built-in error handling
import { pipeline } from 'node:stream/promises';

import path from 'path';

// this is a public-domain text file
const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';

// create a filesystem path for the output file
// process.cwd() = current working directory, 'streamTest.txt' is the desired location for the text to be downloaded to.
const outputFilePath = path.join(process.cwd(), 'streamTest.txt');


// --------------------
// Downloading Function
// --------------------
async function downloadFile(url, outputPath) {
    // fetching the file over HTTPS
    const response = await fetch(url);

    // Make sure the response is valid and has a readable stream, if not...
    if (!response.ok || !response.body) {
        // consuming the response body is mandatory: https://undici.nodejs.org/#/?id=garbage-collection

        // manually cancel the body stream
        await response.body?.cancel();
        throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
    }

    // Create a writable file stream on local filesystem
    const fileStream = fs.createWriteStream(outputPath);

    console.log(`Downloading file from ${url} to ${outputPath}`);

    // Pipe the network stream into the file stream
    // pipeline() handles backpressure and errors properly
    await pipeline(response.body, fileStream);

    console.log('File downloaded successfully');
}


// --------------------
// Read File Function
// --------------------
async function readFile(filePath) {
    // create a readable file stream
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    try {
        // async iterator over the chunks of the file
        for await (const chunk of readStream) {
            console.log('--- File chunk start ---');
            console.log(chunk);     // Print text content
            console.log('--- File chunk end ---');
        }
        console.log('Finished reading the file.');
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}


// -------------------------------------
// Main Execution (combining everything)
// -------------------------------------
try {
    // download the file
    await downloadFile(fileUrl, outputFilePath);

    // read it back
    await readFile(outputFilePath);
} catch (error) {
    console.error(`Error: ${error.message}`);
}