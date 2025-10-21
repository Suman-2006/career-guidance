const College = require('../models/College');

// Get all colleges for admin
exports.getAllCollegesAdmin = async (req, res) => {
  try {
    const colleges = await College.find().sort({ name: 1 });
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new college
exports.addCollege = async (req, res) => {
  try {
    const { name, location, field, courses, tuition, housing, scholarships, supportServices, rules, website, image } = req.body;
    if (!name || !location) return res.status(400).json({ message: 'Name and location required' });

    const college = new College({ name, location, field, courses, tuition, housing, scholarships, supportServices, rules, website, image });
    await college.save();

    res.status(201).json({ message: 'College added successfully', college });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a college
exports.updateCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!college) return res.status(404).json({ message: 'College not found' });

    res.status(200).json({ message: 'College updated successfully', college });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a college
exports.deleteCollege = async (req, res) => {
  try {
    const college = await College.findByIdAndDelete(req.params.id);
    if (!college) return res.status(404).json({ message: 'College not found' });

    res.status(200).json({ message: 'College deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
