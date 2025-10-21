const express = require('express');
const router = express.Router();
const { submitAptitude, getAptitudeResults } = require('../controllers/aptitudeController');

// Route to submit aptitude test
router.post('/submit', submitAptitude);

// Route to get a student's aptitude results
router.get('/results/:studentId', getAptitudeResults);

module.exports = router;
