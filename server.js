// server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>안녕 세계</h1>');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
