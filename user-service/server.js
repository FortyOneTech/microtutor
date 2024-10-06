// user-service/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const lessonPlanRoutes = require('./routes/lessonPlanRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/user', userRoutes);
app.use('/lesson-plans', lessonPlanRoutes);
app.use('/notes', noteRoutes);

// Start Server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
