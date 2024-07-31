const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const resultRoutes = require('./routes/results');

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5200;

// CORS configuration
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connection successful!");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit process if connection fails
});

// Use the routes
app.use('/api', resultRoutes);

// 404 Handler for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
