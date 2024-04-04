const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Module = require('./moduleModel');

const courseSchema = new Schema({
  name: String,
  details: String,
  price: Number,      // currency: RM
  duration: String,
  skills: String,
  studentTotal: Number,
  studentCurrent: Number,
  modules: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Module' }],
    required: false
  },
});

module.exports = mongoose.model('Course', courseSchema);