// const router = require('express').Router();
// const auth = require('../middleware/Auth');
// const {
//   addQuestion,
//   getQuestions,
//   submitTest,
//   getResult
// } = require('../controllers/testController');

// router.post('/questions', auth, addQuestion);
// router.get('/questions', auth, getQuestions);
// router.post('/submit', auth, submitTest);         // ✅ REQUIRED
// router.get('/result/:id', auth, getResult);       // ✅ OPTIONAL

// module.exports = router;


const router = require('express').Router();
const auth = require('../middleware/Auth');
const {
  addQuestion,
  getQuestions,
  submitTest,
  getResult
} = require('../controllers/testController');

router.post('/questions', auth, addQuestion);
router.get('/questions', auth, getQuestions);
router.post('/submit', auth, submitTest);
router.get('/result/:id', auth, getResult);

module.exports = router;
