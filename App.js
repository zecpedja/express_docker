const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API routes
app.get('/hello', (req, res) => {
    console.log('Check your console!');
    res.json({ message: 'Check your console!' }); // Respond with JSON
});

app.get('/' , (req, res) => {
    console.log('hello world');
    res.json({ message: 'Hello World!' }); // Respond with JSON
});

// The "catchall" handler: for any request that doesn't
// match one above, send back the React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
