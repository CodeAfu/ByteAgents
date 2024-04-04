const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const walletSchema = new Schema({
  currencies: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Wallet', walletSchema);