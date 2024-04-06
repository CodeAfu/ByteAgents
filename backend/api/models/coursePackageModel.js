const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursePackageSchema = new Schema({
  name: String,
  price: String,
  token: Number,
  imageUrl: String
});

module.exports = mongoose.model('Package', coursePackageSchema);