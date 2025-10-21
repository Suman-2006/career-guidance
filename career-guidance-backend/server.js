// // const express = require('express');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');
// // const adminRoutes = require('./routes/adminRoutes');


// // dotenv.config();
// // const app = express();

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/auth', require('./routes/authRoutes'));
// // app.use('/api/test', require('./routes/testRoutes'));
// // app.use('/api', require('./routes/careerRoutes'));
// // app.use('/api', require('./routes/locationRoutes'));
// // app.use('/api/college', require('./routes/collegeRoutes')); 
// // app.use('/api/aptitude', require('./routes/aptitudeRoutes'));
// // app.use('/api/admin', adminRoutes);
// // // Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// // const express = require('express');
// // const cors = require('cors');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');

// // // Import routes
// // const authRoutes = require('./routes/authRoutes');
// // const testRoutes = require('./routes/testRoutes');
// // const careerRoutes = require('./routes/careerRoutes');
// // const locationRoutes = require('./routes/locationRoutes');
// // const collegeRoutes = require('./routes/collegeRoutes');
// // const aptitudeRoutes = require('./routes/aptitudeRoutes');
// // const adminRoutes = require('./routes/adminRoutes');

// // dotenv.config();
// // const app = express();

// // // Connect to MongoDB
// // connectDB();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/test', testRoutes);
// // app.use('/api/careers', careerRoutes);
// // app.use('/api/locations', locationRoutes);
// // app.use('/api/college', collegeRoutes);
// // app.use('/api/aptitude', aptitudeRoutes);
// // app.use('/api/admin', adminRoutes);

// // // Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const testRoutes = require('./routes/testRoutes');
// const careerRoutes = require('./routes/careerRoutes');
// const locationRoutes = require('./routes/locationRoutes');
// const collegeRoutes = require('./routes/collegeRoutes');
// const aptitudeRoutes = require('./routes/aptitudeRoutes');
// const adminRoutes = require('./routes/adminRoutes');

// dotenv.config();
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/test', testRoutes);
// app.use('/api/careers', careerRoutes);
// app.use('/api/locations', locationRoutes);
// app.use('/api/college', collegeRoutes);
// app.use('/api/aptitude', aptitudeRoutes);
// app.use('/api/admin', adminRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send('✅ Backend is running');
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// module.exports = router;


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const testRoutes = require('./routes/testRoutes');
// const careerRoutes = require('./routes/careerRoutes');
// const locationRoutes = require('./routes/locationRoutes');
// const collegeRoutes = require('./routes/collegeRoutes');
// const aptitudeRoutes = require('./routes/aptitudeRoutes'); // empty but must export router
// const adminRoutes = require('./routes/adminRoutes');

// dotenv.config();
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/test', testRoutes);
// app.use('/api/careers', careerRoutes);
// app.use('/api/locations', locationRoutes);
// app.use('/api/college', collegeRoutes);
// app.use('/api/aptitude', aptitudeRoutes);
// app.use('/api/admin', adminRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send('✅ Backend is running');
// });

// // Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// module.exports = app;


// // server.js
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // Import routes
// const authRoutes = require('./routes/authRoutes');
// const testRoutes = require('./routes/testRoutes');
// const careerRoutes = require('./routes/careerRoutes');
// const locationRoutes = require('./routes/locationRoutes');
// const collegeRoutes = require('./routes/collegeRoutes');
// const aptitudeRoutes = require('./routes/aptitudeRoutes'); // empty but must export router
// const adminRoutes = require('./routes/adminRoutes');

// dotenv.config();
// const app = express();

// // ================= MIDDLEWARE =================
// app.use(cors()); // Enable CORS for all origins
// app.use(express.json()); // Parse JSON bodies

// // ================= CONNECT TO MONGODB =================
// connectDB();

// // ================= ROUTES =================
// app.use('/api/auth', authRoutes);
// app.use('/api/test', testRoutes);
// app.use('/api/careers', careerRoutes);
// app.use('/api/locations', locationRoutes);
// app.use('/api/college', collegeRoutes);
// app.use('/api/aptitude', aptitudeRoutes);
// app.use('/api/admin', adminRoutes);


// // ================= ROOT ROUTE =================
// app.get('/', (req, res) => {
//   res.send('✅ Backend is running');
// });

// // ================= ERROR HANDLING =================
// // 404 for unknown routes
// app.use((req, res, next) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('Server error:', err.stack);
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // ================= START SERVER =================
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// module.exports = app;


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const authRoutes = require('./routes/authRoutes');
const careerRoutes = require('./routes/careerRoutes');
const locationRoutes = require('./routes/locationRoutes');
const collegeRoutes = require('./routes/collegeRoutes');
const aptitudeRoutes = require('./routes/aptitudeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/aptitude', aptitudeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);


// Root route
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app;
