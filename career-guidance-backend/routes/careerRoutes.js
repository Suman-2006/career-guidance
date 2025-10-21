// // routes/careerRoutes.js
// const express = require('express');
// const router = express.Router();
// const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
// const authMiddleware = require('../middleware/Auth');

// router.post('/career', authMiddleware, saveCareerChoice);
// router.get('/career', authMiddleware, getUserCareer);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
// const authMiddleware = require('../middleware/Auth');

// router.post('/career', authMiddleware, saveCareerChoice);
// router.get('/career', authMiddleware, getUserCareer);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// // router.post('/career', authMiddleware, saveCareerChoice);
// const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
// const authMiddleware = require('../middleware/Auth');

// // ✅ Change paths from '/career' → '/'
// router.post('/', authMiddleware, saveCareerChoice);
// router.get('/', authMiddleware, getUserCareer);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { saveCareerChoice, getUserCareer } = require('../controllers/careerController');
const authMiddleware = require('../middleware/Auth');

// Use '/' instead of '/career' for simplicity
router.post('/career', authMiddleware, saveCareerChoice);
router.get('/career', authMiddleware, getUserCareer);


module.exports = router;
