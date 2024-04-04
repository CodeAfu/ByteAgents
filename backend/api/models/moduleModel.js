const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  topic: String,
  description: String,
  contents: {
    type: [Schema.Types.Mixed],
    required: false
  }
});


module.exports = mongoose.model('Module', moduleSchema);