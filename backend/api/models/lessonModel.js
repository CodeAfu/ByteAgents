const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  objectives: {
    type: [String],
    required: true
  },
});


module.exports = mongoose.model('Lesson', lessonSchema);