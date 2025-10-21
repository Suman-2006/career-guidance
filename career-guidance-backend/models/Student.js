const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  selectedCollege: { type: mongoose.Schema.Types.ObjectId, ref: 'College' },
  course: { type: String },
  careerField: { type: String },
  location: { type: String },
  aptitudeScore: { type: Number }
});

module.exports = mongoose.model('Student', studentSchema);
