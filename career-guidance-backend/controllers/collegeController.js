// // controllers/collegeController.js
// const College = require('../models/College');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// exports.collegeSignup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password)
//       return res.status(400).json({ message: 'All fields are required' });

//     const existingCollege = await College.findOne({ email });
//     if (existingCollege)
//       return res.status(400).json({ message: 'Email already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const college = new College({ name, email, password: hashedPassword });
//     await college.save();

//     res.status(201).json({ message: 'College registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.collegeLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const college = await College.findOne({ email });
//     if (!college) return res.status(401).json({ message: 'Invalid email' });

//     const isMatch = await bcrypt.compare(password, college.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

//     const token = jwt.sign({ id: college._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.getAllColleges = async (req, res) => {
//   try {
//     const colleges = await College.find();
//     res.status(200).json(colleges);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createCollege = async (req, res) => {
//   res.status(501).json({ message: 'Not implemented yet' });
// };


const College = require('../models/College');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ======================= College Signup (UNCHANGED) =======================
exports.collegeSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: 'All fields are required' });

    const existingCollege = await College.findOne({ email });
    if (existingCollege)
      return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const college = new College({ name, email, password: hashedPassword });
    await college.save();

    res.status(201).json({ message: 'College registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ======================= College Login (UNCHANGED) =======================
exports.collegeLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const college = await College.findOne({ email });
    if (!college) return res.status(401).json({ message: 'Invalid email' });

    const isMatch = await bcrypt.compare(password, college.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: college._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ======================= Get all colleges (for CollegeListPage) =======================
exports.getAllColleges = async (req, res) => {
  try {
    const { location, field } = req.query; // optional filtering
    let query = {};

    if (location) query.location = location;
    if (field) query.field = field;

    const colleges = await College.find(query).sort({ name: 1 });
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ======================= Create new college (admin only) =======================
exports.createCollege = async (req, res) => {
  try {
    const { name, location, field, courses, tuition, housing, scholarships, supportServices, rules, website, image } = req.body;
    if (!name || !location) return res.status(400).json({ message: 'Name and location are required' });

    const college = new College({ name, location, field, courses, tuition, housing, scholarships, supportServices, rules, website, image });
    await college.save();
    res.status(201).json({ message: 'College added successfully', college });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
