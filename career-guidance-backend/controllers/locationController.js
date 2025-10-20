const LocationChoice = require('../models/LocationChoice');

exports.saveLocation = async (req, res) => {
  try {
    const { location } = req.body;
    const newLocation = new LocationChoice({ userId: req.user.id, location });
    await newLocation.save();
    res.status(201).json({ message: 'Location saved' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserLocation = async (req, res) => {
  try {
    const location = await LocationChoice.findOne({ userId: req.user.id });
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
