// const express = require('express');
// const router = express.Router();
// const { saveLocation, getUserLocation } = require('../controllers/locationController'); 
// const authMiddleware = require('../middleware/Auth'); 

// router.post('/location', authMiddleware, saveLocation); 
// router.get('/location', authMiddleware, getUserLocation); 
// module.exports = router;


const express = require('express');
const router = express.Router();
const { saveLocation, getUserLocation } = require('../controllers/locationController');
const authMiddleware = require('../middleware/Auth');

router.post('/location', authMiddleware, saveLocation);
router.get('/location', authMiddleware, getUserLocation);

module.exports = router;
