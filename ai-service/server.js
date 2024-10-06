// ai-service/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/ai', aiRoutes);

// Start Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`AI Service running on port ${PORT}`);
});