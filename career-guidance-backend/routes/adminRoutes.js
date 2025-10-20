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
const { getAllColleges, deleteCollege } = require('../controllers/adminController');

// Admin routes
router.get('/colleges', getAllColleges);
router.delete('/colleges/:id', deleteCollege);

module.exports = router;
