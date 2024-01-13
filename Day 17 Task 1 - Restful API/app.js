const express = require('express');
const app = express();

// Make an API
app.use((req, res, next) => {
    res.status(200).json({
        id: '1',
        name: 'zul',
        age: 27,
        gender: 'Male',
        country: 'Malaysia',
    });
});

module.exports = app;