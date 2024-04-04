const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Lesson = require('./lessonModel');

const courseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  lessons: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    required: false
  },
  progress: {
    type: Number,
    required: false
  }
});


module.exports = mongoose.model('Course', courseSchema);