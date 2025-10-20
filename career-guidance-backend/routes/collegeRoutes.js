// // routes/collegeRoutes.js
// const express = require('express');
// const router = express.Router();

// const {
//   collegeSignup,
//   collegeLogin,
//   getAllColleges,
//   createCollege
// } = require('../controllers/collegeController');

// const auth = require('../middleware/Auth');

// // Always use handler functions, never undefined
// router.get('/', getAllColleges);            // Public route
// router.post('/', auth, createCollege);      // Protected
// router.post('/signup', collegeSignup);      // Signup route
// router.post('/login', collegeLogin);        // Login route

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  collegeSignup,
  collegeLogin,
  getAllColleges,
  createCollege
} = require('../controllers/collegeController');
const auth = require('../middleware/Auth');

// Routes
router.get('/', getAllColleges);         // Public
router.post('/', auth, createCollege);   // Protected
router.post('/signup', collegeSignup);
router.post('/login', collegeLogin);

module.exports = router;
