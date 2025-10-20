const College = require('../models/College');

exports.getAllColleges = async (req, res) => {
  try {
    const colleges = await College.find();
    res.status(200).json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteCollege = async (req, res) => {
  try {
    const { id } = req.params;
    await College.findByIdAndDelete(id);
    res.status(200).json({ message: 'College deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
