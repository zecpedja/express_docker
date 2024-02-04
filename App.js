const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    console.log('hello world');
    res.send('Check your console!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

