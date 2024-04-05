const axios = require('axios');

const apiKeyHeader = 'X-CMC_PRO_API_KEY';

const getLatestListings = async (req, res) => {
  let response = null;
  
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKET_APIKEY,
        },
      });
    } catch(ex) {
      response = null;
      // error
      res.status(404).json( { error: ex });
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      res.status(200).json(json);
      resolve(json);
    }
  });
}

const getCryptoInfoByCoinName = async (req, res) => {
  const crypto = req.params.crypto;
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${crypto}`
  let response = null;

  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKET_APIKEY,
        },
      });
    } catch(ex) {
      response = null;
      // error
      res.status(404).send({ error: ex.message });
      console.log(ex.message);
      reject(ex);
    }
    if (response) {
      // success
      const json = response.data;
      resolve(json);
    }
  });
};

const getGlobalMetricsLatest = async (req, res) => {
  const url = `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest`
  let response = null;

  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(url, {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKET_APIKEY,
        },
      });
    } catch(ex) {
      response = null;
      // error
      res.status(404).send({ error: ex.message });
      reject(ex);
    }

    if (response) {
      // success
      const json = response.data;
      res.status(200).send(json);
      resolve(json);
    }
  });
}

module.exports = {
  getLatestListings,
  getCryptoInfoByCoinName,
  getGlobalMetricsLatest
}