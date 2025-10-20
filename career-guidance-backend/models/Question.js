// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   options: [String],
//   answer: { type: String, required: true },
//   category: { type: String, enum: ['verbal', 'quantitative', 'gk'], required: true }
// });

// module.exports = mongoose.model('Question', questionSchema);

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
  category: { type: String, enum: ['verbal', 'quantitative', 'gk'], required: true }
});

module.exports = mongoose.model('Question', questionSchema);
