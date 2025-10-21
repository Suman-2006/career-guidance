const mongoose = require('mongoose');

const aptitudeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  verbal: Number,
  quantitative: Number,
  generalKnowledge: Number,
  totalScore: Number,
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AptitudeTest', aptitudeSchema);
