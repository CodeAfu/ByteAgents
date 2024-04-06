const { WebsocketAPI, Spot } = require('@binance/connector');
const { Console } = require('console');

const logger = new Console({ stdout: process.stdout, stderr: process.stderr });

const apiKey = '';
const client = new Spot(apiKey, '');

const getHistoricalTrades = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.historicalTrades(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const getAggTrades = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.aggTrades(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const getAvgPrice = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.avgPrice(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const getExchangeInfo = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.historicalTrades(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const getDepth = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.depth(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const getTrades = async (req, res) => {
  const crypto = req.params.crypto;
  try {
    const response = await client.depth(crypto);
    res.status(200).json({ response: response.data });
  } catch (err) {
    res.status(500).json({ error: err.messsage });
  }
}

const websocketConnect = async (req, res) => {
  const currency = req.params.currency;
  const callbacks = {
    open: (client) => {
      logger.debug('Connected with websocket server');
      client.orderbook(currency);
    },
    close: () => logger.debug('Disconnected from the websocket server'),
    message: data => logger.info(data)
  }

  const websocketAPIClient = new WebsocketAPI(null, null, { logger, callbacks })

  setTimeout(() => websocketAPIClient.disconnect(), 20000);
}

module.exports = {
  getHistoricalTrades,
  getAggTrades,
  getAvgPrice,
  getExchangeInfo,
  getDepth,
  websocketConnect,
  getTrades,
}
