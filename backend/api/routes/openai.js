require('dotenv').config();
const express = require('express');
const router = express.Router();

const { 
  getResponse
} = require('../controllers/openaiController');

router.post('/', getResponse);

module.exports = router;