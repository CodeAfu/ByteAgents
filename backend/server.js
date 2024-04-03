require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Express App
const app = express();

// Import Routes
const testRoute = require('./api/routes/test');
// const userRoute = require('./api/routes/user')
// const courseRoute = require('./api/routes/course')
// const walletRoute = require('./api/routes/wallet')

// Use Modules
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Append headers to prevent CORS errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return response.status(200).json({});
    }
    next();
});

// Routes to handle requests
app.use('/test', testRoute);
// app.use('/user', userRoute);
// app.use('/course', courseRoute);
// app.use('/wallet', walletRoute);

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


app.listen(process.env.PORT, () => {
    console.log(`Link: http://127.0.0.1:${process.env.PORT}`)
});


