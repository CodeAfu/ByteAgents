const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
  imageUrl: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Course', courseSchema);