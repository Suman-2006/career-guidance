// const mongoose = require("mongoose");

// const collegeSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   field: { type: String, default: "" }, // e.g., Engineering, Management
//   courses: { type: [String], default: [] },
//   tuition: { type: Number, default: 0 },
//   housing: { type: Number, default: 0 },
//   scholarships: { type: [String], default: [] },
//   supportServices: { type: [String], default: [] },
//   rules: { type: [String], default: [] },
//   website: { type: String, default: "" },
//   image: { type: String, default: "" },
// });

// module.exports = mongoose.model("College", collegeSchema);

const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  field: { type: String }, // e.g., Engineering, Management
  courses: [{ type: String }],
  tuition: Number,
  scholarships: [{ type: String }],
  housing: { type: String },
  campusSupport: { type: String },
  rules: { type: String },
  website: { type: String },
  image: { type: String },
  email: { type: String },
  password: { type: String } // for college login
});

module.exports = mongoose.model('College', collegeSchema);
