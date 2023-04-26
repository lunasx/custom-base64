const express = require("express");
const app = express();
const Base64 = require("js-base64"); //npm i js-base64

app.get("/", async (req, res) => {
    // encode and slice
    const encodedString = Base64.encode("Lorem ipsum dolor sit amet"); // default string
    const encodedStart = encodedString.slice(0, encodedString.length / 2); // slice start (50%)
    const encodedEnd = encodedString.slice(encodedString.length / 2); // slice end (50%)

    // encode combined
    const combinedString = (encodedEnd + encodedStart).replace("=", ""); // combined string (removed '=' string)
    const combinedStart = combinedString.slice(0, combinedString.length / 2); // combined slice start (50%)
    const combinedEnd = combinedString.slice(combinedString.length / 2); // combined slice end (50%)

    // decode custom base64 string
    const decodedString = Base64.decode(combinedEnd + combinedStart); // decoded custom string

    // default output
    console.log('\n', "BEFORE:")
    console.log(" [default encode] ", (encodedStart + encodedEnd).replace("=", ""));
    console.log(" [default decode] ", Base64.decode(encodedStart + encodedEnd));

    // log output
    console.log('\n', "AFTER:")
    console.log(" [custom encode] ", combinedString);
    console.log(" [custom decode] ", decodedString);

    // accuracy debug
    if ((encodedStart + encodedEnd) != encodedString) {
        console.log("accuracy check: false");
    }
});

app.listen(600, (req, res) => console.log("http://localhost:600/"));