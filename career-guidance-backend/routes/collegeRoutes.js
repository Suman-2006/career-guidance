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


// const express = require('express');
// const router = express.Router();
// const {
//   collegeSignup,
//   collegeLogin,
//   getAllColleges,
//   createCollege
// } = require('../controllers/collegeController');
// const auth = require('../middleware/Auth');

// // Routes
// router.get('/', getAllColleges);         // Public
// router.post('/', auth, createCollege);   // Protected
// router.post('/signup', collegeSignup);
// router.post('/login', collegeLogin);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const {
//   collegeSignup,
//   collegeLogin,
//   getAllColleges,
//   createCollege
// } = require('../controllers/collegeController');
// const auth = require('../middleware/Auth');

// // Public: get all colleges
// router.get('/list', getAllColleges);

// // Protected: create a new college
// router.post('/', auth, createCollege);

// // College auth routes
// router.post('/signup', collegeSignup);
// router.post('/login', collegeLogin);

// module.exports = router;


const express = require('express');
const router = express.Router();

// ✅ College Registration Route
router.post('/register', (req, res) => {
  const { name, email, phone, course, college } = req.body;

  console.log('📩 College registration data:', req.body);

  // TODO: Add database logic here if needed (e.g., save to MongoDB)
  // For now, just send a success response
  res.status(200).json({
    message: `College registration successful for ${college}`,
    data: { name, email, phone, course, college }
  });
});

// ✅ Example route to fetch all colleges (optional)
// router.get('/', (req, res) => {
//   res.json([
//     { id: 1, name: 'IIT Hyderabad' },
//     { id: 2, name: 'Osmania University' },
//     { id: 3, name: 'NIT Warangal' }
//   ]);
// });

module.exports = router;
