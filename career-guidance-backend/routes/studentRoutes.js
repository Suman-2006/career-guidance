// routes/studentRoutes.js
const express = require('express');
const router = express.Router();

// Update student
router.post('/update', (req, res) => {
  // Update logic here
  res.status(200).json({ message: 'Student updated successfully' });
});

module.exports = router;
