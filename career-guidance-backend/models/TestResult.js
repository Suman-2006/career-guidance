const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: Number,
  total: Number,
  answers: [
    {
      questionId: String,
      selected: String,
      correct: String,
      isCorrect: Boolean
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TestResult', resultSchema);
