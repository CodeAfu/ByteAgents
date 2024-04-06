require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const { 
} = require('../controllers/openaiController');


router.get('/', getLatestListings);

module.exports = router;