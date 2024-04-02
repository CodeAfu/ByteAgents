const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const testRoute = require('./api/routes/test');

app.use('/test', testRoute);

module.exports = app;