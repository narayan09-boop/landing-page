// Load environment variables from .env file at the very top
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const port = process.env.PORT || 3001; // Use 3001 as a default

// --- Middleware ---

// Enable Cross-Origin Resource Sharing (CORS)
// This allows your React frontend (on a different port) to call this backend
app.use(cors());

// Enable Express to parse JSON request bodies
app.use(express.json());

// --- Routes ---
// Tell Express to use your chat routes for any request starting with /api
app.use('/api', chatRoutes);

// --- Start Server ---
app.listen(port, () => {
  console.log(`🚀 Appoint'd backend server is running on http://localhost:${port}`);
});