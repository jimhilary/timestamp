 // server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/timestamp/:date_string?', (req, res) => {
    const dateString = req.params.date_string;
    let date;

    // If no date string is provided, return the current date
    if (!dateString) {
        date = new Date();
    } else if (!isNaN(dateString)) {
        // If the date string is a number, treat it as a Unix timestamp
        date = new Date(parseInt(dateString));
    } else {
        // Otherwise, try to parse it as a date string
        date = new Date(dateString);
    }

    // Check if the date is valid
    if (date.toString() === 'Invalid Date') {
        return res.json({ error: 'Invalid Date' });
    }

    // Return the response in the required format
    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});