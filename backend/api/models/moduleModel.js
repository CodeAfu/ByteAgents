const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  title: String,
  description: String,
  moduleNumber: {
    type: Number,
    required: false
  },
  timeToComplete: {
    type: String,
    required: false
  },
  contents: {
    type: [Schema.Types.Mixed],
    required: false
  }
});


module.exports = mongoose.model('Module', moduleSchema);