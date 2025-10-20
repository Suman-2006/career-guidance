// const express = require('express');
// const router = express.Router();
// const { signup, login } = require('../controllers/authController');

// router.post('/signup', signup);
// router.post('/login', login);

// module.exports = router;


// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const express = require('express');
// const router = express.Router();

// const { signup, login } = require('../controllers/authController');

// // Auth routes

// router.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // 1️⃣ Basic validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // 2️⃣ Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // 3️⃣ Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 4️⃣ Create new user in MongoDB
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     // 5️⃣ Generate JWT token
//     const token = jwt.sign(
//       { id: newUser._id, email: newUser.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     // 6️⃣ Respond with success
//     res.status(201).json({
//       message: 'Signup successful',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//       token,
//     });

//   } catch (err) {
//     console.error('Signup Error:', err.message);
//     res.status(500).json({ message: 'Server error during signup' });
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // 1️⃣ Check if all fields are provided
//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password required' });
//     }

//     // 2️⃣ Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     // 3️⃣ Compare entered password with hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // 4️⃣ Generate JWT token
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     // 5️⃣ Send success response
//     res.status(200).json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Login Error:', err.message);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });



// // module.exports = router;


// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const router = express.Router();

// // ✅ Signup Route
// router.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();

//     const token = jwt.sign(
//       { id: newUser._id, email: newUser.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     res.status(201).json({
//       message: 'Signup successful',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Signup Error:', err.message);
//     res.status(500).json({ message: 'Server error during signup' });
//   }
// });

// // ✅ Login Route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Login Error:', err.message);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

// export default router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Make sure this file exists

// const router = express.Router();

// // ✅ Signup Route
// router.post('/signup', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // 1️⃣ Basic validation
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     // 2️⃣ Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     // 3️⃣ Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 4️⃣ Create new user in MongoDB
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     // 5️⃣ Generate JWT token
//     const token = jwt.sign(
//       { id: newUser._id, email: newUser.email },
//       process.env.JWT_SECRET || 'secretkey',
//       { expiresIn: '1h' }
//     );

//     // 6️⃣ Respond with success
//     res.status(201).json({
//       message: 'Signup successful',
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Signup Error:', err.message);
//     res.status(500).json({ message: 'Server error during signup' });
//   }
// });

// // ✅ Login Route
// // router.post('/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //       return res.status(400).json({ message: 'Email and password required' });
// //     }

// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(401).json({ message: 'User not found' });
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(401).json({ message: 'Invalid credentials' });
// //     }

// //     const token = jwt.sign(
// //       { id: user._id, email: user.email },
// //       process.env.JWT_SECRET || 'secretkey',
// //       { expiresIn: '1h' }
// //     );

// //     res.status(200).json({
// //       message: 'Login successful',
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //       },
// //       token,
// //     });
// //   } catch (err) {
// //     console.error('Login Error:', err.message);
// //     res.status(500).json({ message: 'Server error during login' });
// //   }
// // });

// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }

//     // ✅ Add these console logs to debug
//     console.log("Entered Password:", password);
//     console.log("Stored Hashed Password:", user.password);
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password Match:", isMatch);
    
// //     db.users.insertOne({
// //   name: 'Test User',
// //   email: 'test@example.com',
// //   password: hashedPassword
// // });
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // const token = jwt.sign(
//     //   { id: user._id, email: user.email },
//     //   process.env.JWT_SECRET || 'secretkey',
//     //   { expiresIn: '1h' }
//     // );

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
// res.json({ token, user });

//     res.status(200).json({
//       message: 'Login successful',
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//       token,
//     });
//   } catch (err) {
//     console.error('Login Error:', err.message);
//     res.status(500).json({ message: 'Server error during login' });
//   }
// });

// module.exports = router;


// routes/authRouter.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // ✅ Make sure this path matches your folder structure

// =========================
//  USER SIGNUP ROUTE
// =========================
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create JWT token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );

    // Send response
    return res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
      token,
    });
  } catch (err) {
    console.error('Signup Error:', err.message);
    return res.status(500).json({ message: 'Server error during signup' });
  }
});

// =========================
//  USER LOGIN ROUTE
// =========================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Compare passwords
    console.log('Entered Password:', password);
    console.log('Stored Hashed Password:', user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1d' }
    );

    // Send success response
    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error('Login Error:', err.message);
    return res.status(500).json({ message: 'Server error during login' });
  }
});

module.exports = router;
