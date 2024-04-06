require('dotenv').config();
const express = require('express');
const router = express.Router();

const { 
  websocketConnect,
  getHistoricalTrades,
  getAggTrades,
  getAvgPrice,
  getExchangeInfo,
  getDepth,
  getTrades,
} = require('../controllers/binanceController');


router.options('/conn', websocketConnect);
// BTCUSDT, ETCUSDT, ETHUSDT, (check website for more currencies)
router.get('/historical/:crypto', getHistoricalTrades);
router.get('/agg-trades/:crypto', getAggTrades);
router.get('/avg-price/:crypto', getAvgPrice);
router.get('/exchange-info/:crypto', getExchangeInfo);
router.get('/depth/:crypto', getDepth);
router.get('/trades/:crypto', getTrades);

module.exports = router;