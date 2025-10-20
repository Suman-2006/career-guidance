// // routes/careerRoutes.js
// const express = require('express');
// const router = express.Router();
// const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
// const authMiddleware = require('../middleware/Auth');

// router.post('/career', authMiddleware, saveCareerChoice);
// router.get('/career', authMiddleware, getUserCareer);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
const authMiddleware = require('../middleware/Auth');

router.post('/career', authMiddleware, saveCareerChoice);
router.get('/career', authMiddleware, getUserCareer);

module.exports = router;
