// controllers/careerController.js
const CareerChoice = require('../models/CareerChoice');

exports.saveCareerChoice = async (req, res) => {
  try {
    const { career } = req.body;
    const userId = req.user.id;

    if (!career) return res.status(400).json({ message: 'Career is required' });

    const saved = await CareerChoice.create({ userId, career });
    res.status(201).json({ message: 'Career saved', data: saved });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getUserCareer = async (req, res) => {
  try {
    const userId = req.user.id;
    const choice = await CareerChoice.findOne({ userId });

    if (!choice) return res.status(404).json({ message: 'No career selected' });

    res.json(choice);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
