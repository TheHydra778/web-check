const path = require ('path');
const express = require('express');
const app = express();
const { readfile, readFile } = require('fs');


app.get('/', (request, response) => {
    readFile('./index.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send("sorry, out of order")
        }
        response.send(html);
    })
});

app.listen(3000, () => console.log('app available on http://localhost:3000'));