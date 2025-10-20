const TestResult = require('../models/TestResult');


const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([
      { $sample: { size: 10 } }, // randomly selects 10 questions
      { $project: { question: 1, options: 1 } } // hide answers
    ]);

    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.submitTest = async (req, res) => {
  try {
    const answers = req.body.answers;
    let score = 0;
    const total = answers.length;
    const details = [];

    for (let ans of answers) {
      const question = await Question.findById(ans.questionId);
      if (!question) continue;

      const isCorrect = ans.selected === question.answer;
      if (isCorrect) score++;

      details.push({
        questionId: ans.questionId,
        selected: ans.selected,
        correct: question.answer,
        isCorrect
      });
    }

    const result = await TestResult.create({
      studentId: req.user.id,
      score,
      total,
      answers: details
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getResult = async (req, res) => {
  try {
    const result = await TestResult.findById(req.params.id);
    if (!result) return res.status(404).json({ message: 'Result not found' });

    // Allow only the student who submitted the test to view it
    if (String(result.studentId) !== req.user.id)
      return res.status(403).json({ message: 'Access denied' });

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
