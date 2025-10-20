// controllers/careerController.js
const CareerChoice = require('../models/CareerChoice');

exports.saveCareerChoice = async (req, res) => {
  try {
    const { career } = req.body;
    const userId = req.user.id;

    const choice = new CareerChoice({ userId, career });
    await choice.save();

    res.status(201).json({ message: 'Career choice saved' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserCareer = async (req, res) => {
  try {
    const userId = req.user.id;
    const career = await CareerChoice.findOne({ userId });

    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }

    res.json(career);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
