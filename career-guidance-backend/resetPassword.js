// resetPassword.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User'); // adjust path if needed

const resetPassword = async (email, newPassword) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    const result = await User.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true }
    );

    if (!result) {
      console.log('User not found');
    } else {
      console.log(`Password for ${email} has been reset successfully`);
    }

    process.exit(0);
  } catch (err) {
    console.error('Error resetting password:', err.message);
    process.exit(1);
  }
};

// ======= USAGE =======
// Change these values
const email = 'sumanrk@gmail.com';
const newPassword = '123456';

resetPassword(email, newPassword);
