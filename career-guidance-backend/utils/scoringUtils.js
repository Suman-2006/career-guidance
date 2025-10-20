const { calculateScore, calculatePercentage } = require('./utils/scoringUtils');
const validateEmail = require('./utils/validateEmail');

// Scoring example
const userAnswers = ['A', 'B', 'C'];
const correctAnswers = ['A', 'C', 'C'];
const score = calculateScore(userAnswers, correctAnswers);
const percent = calculatePercentage(score, correctAnswers.length);
console.log(score, percent);

// Email validation example
console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid-email'));    // false
