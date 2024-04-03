const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Import Routes
const testRoute = require('./api/routes/test');

// Use Modules
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
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