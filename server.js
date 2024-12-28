 // server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the API routes
const apiRoutes = require('./api');

// Serve static files from the public directory
app.use(express.static('public'));

// Use the API routes
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});