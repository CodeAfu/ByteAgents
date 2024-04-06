const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursePackageSchema = new Schema({
  name: String,
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  imageUrl: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Package', coursePackageSchema);