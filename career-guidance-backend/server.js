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


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const testRoutes = require('./routes/testRoutes');
const careerRoutes = require('./routes/careerRoutes');
const locationRoutes = require('./routes/locationRoutes');
const collegeRoutes = require('./routes/collegeRoutes');
const aptitudeRoutes = require('./routes/aptitudeRoutes'); // empty but must export router
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/aptitude', aptitudeRoutes);
app.use('/api/admin', adminRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

module.exports = app;
