// controllers/aptitudeController.js
const AptitudeTest = require('../models/AptitudeTest');
const Student = require('../models/Student');

// Submit aptitude test
exports.submitAptitude = async (req, res) => {
  try {
    const { studentId, verbal, quantitative, generalKnowledge } = req.body;

    if (!studentId || verbal === undefined || quantitative === undefined || generalKnowledge === undefined) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Calculate total score
    const totalScore = verbal + quantitative + generalKnowledge;

    // Save aptitude test
    const aptitudeTest = new AptitudeTest({
      student: studentId,
      verbal,
      quantitative,
      generalKnowledge,
      totalScore
    });

    await aptitudeTest.save();

    // Update student's aptitudeScore
    await Student.findByIdAndUpdate(studentId, { aptitudeScore: totalScore });

    res.status(201).json({ message: 'Aptitude test submitted successfully', totalScore });
  } catch (error) {
    console.error('Error submitting aptitude test:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get aptitude test results for a student
exports.getAptitudeResults = async (req, res) => {
  try {
    const { studentId } = req.params;

    const test = await AptitudeTest.findOne({ student: studentId }).populate('student', 'name email selectedCollege');

    if (!test) {
      return res.status(404).json({ message: 'Aptitude test not found for this student' });
    }

    res.status(200).json(test);
  } catch (error) {
    console.error('Error fetching aptitude test results:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
