// Load environment variables first, before anything else
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/userRoutes');

// Use environment variable, fall back to local DB for development
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/userDB";
const PORT = process.env.PORT || 8888;

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

// Create express app
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

app.get('/', (req, res) => {
  res.send("API is ready for use");
});

app.get('/test', (req, res) => {
  res.send("Test endpoint is working");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});