// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Your routes her




app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// ... after your API routes
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;