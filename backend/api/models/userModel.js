const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Course = require('./courseModel');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  coursesEnrolled: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);