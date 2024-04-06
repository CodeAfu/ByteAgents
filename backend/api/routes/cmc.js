require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

const { 
  getLatestListings,
  getCryptoInfoByCoinName,
  getGlobalMetricsLatest,
} = require('../controllers/cmcController');


router.get('/', getLatestListings);
router.get('/:crypto', getCryptoInfoByCoinName);
router.get('/global-metrics/quotes/latest', getGlobalMetricsLatest);

router.get("/", (req, res) => {
  res.status(200).send({ name: "Hello World "})
})

module.exports = router;