// const express = require('express');
// const router = express.Router();
// const { getAllColleges, deleteCollege } = require('../controllers/adminController');

// // View all colleges
// router.get('/colleges', getAllColleges);

// // Delete college by ID
// router.delete('/colleges/:id', deleteCollege);

// module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth'); // should verify admin role
const { addCollege, deleteCollege, updateCollege, getAllCollegesAdmin } = require('../controllers/adminController');

// Admin-only: get all colleges (detailed)
router.get('/colleges', auth, getAllCollegesAdmin);

// Admin-only: add a new college
router.post('/colleges', auth, addCollege);

// Admin-only: update college info
router.put('/colleges/:id', auth, updateCollege);

// Admin-only: delete a college
router.delete('/colleges/:id', auth, deleteCollege);

module.exports = router;
