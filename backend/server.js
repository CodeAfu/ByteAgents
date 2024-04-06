require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// const bodyParser = require('body-parser');

// Import Routes
const testRoute = require('./api/routes/test');
const userRoute = require('./api/routes/user');
const courseRoute = require('./api/routes/course');
const moduleRoute = require('./api/routes/module');
const walletRoute = require('./api/routes/wallet');
const cmcRoute = require('./api/routes/cmc');
const binanceRoute = require('./api/routes/binance');
const coursePackageRoute = require('./api/routes/coursePackage');

// Express App
const app = express();

// Use Modules
app.use(express.json());
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

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
app.use('/api/test', testRoute);
app.use('/api/user', userRoute);
app.use('/api/course', courseRoute);
app.use('/api/module', moduleRoute);
app.use('/api/wallet', walletRoute);
app.use('/api/cmc', cmcRoute);
app.use('/api/binance', binanceRoute);
app.use('/api/package', coursePackageRoute);

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

// DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`DB connection succesful: http://127.0.0.1:${process.env.PORT}`)
    });
  })
  .catch((err) => {
    console.log(err);
  });

