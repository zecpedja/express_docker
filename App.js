const express = require('express');
const app = express();

const port = 3000;

const path = require('path');
// Serve static files from the React app

app.use(express.static(path.join(__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back the React's index.html file.

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.get('/hello', (req, res) => {
    console.log('Check your console!');
    res.send('Check your console!');
});

app.get('/' , (req, res) => {
    console.log('hello world');
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

