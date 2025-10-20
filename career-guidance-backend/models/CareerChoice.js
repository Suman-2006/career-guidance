// // models/CareerChoice.js
// const mongoose = require('mongoose');

// const careerChoiceSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   career: {
//     type: String,
//     required: true,
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('CareerChoice', careerChoiceSchema);


const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  career: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('CareerChoice', careerSchema);
