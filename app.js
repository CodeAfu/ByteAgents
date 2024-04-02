const express = require('express');
const app = express();
const morgan = require('morgan');

const testRoute = require('./api/routes/test');

app.use(morgan('dev'));

// Routes
app.use('/test', testRoute);

// Catch error if not part of routes above
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });  
});

module.exports = app;