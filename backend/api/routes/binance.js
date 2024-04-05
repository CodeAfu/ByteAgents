require('dotenv').config();
const express = require('express');
const router = express.Router();

const { 
  websocketConnect,
  getHistoricalTrades,
} = require('../controllers/binanceController');


router.options('/conn', websocketConnect);
// BTCUSDT, ETCUSDT, ETHUSDT, (check website for more currencies)
router.get('/historical/:crypto', getHistoricalTrades);

module.exports = router;