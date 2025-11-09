// Load environment variables from .env file at the very top
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
// const port = process.env.PORT || 3001; // Vercel handles this, so we don't need it

// --- Middleware ---

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Enable Express to parse JSON request bodies
app.use(express.json());

// --- Routes ---
// Tell Express to use your chat routes for any request starting with /api
app.use('/api', chatRoutes);

// --- ADD THIS FOR VERCEL ---
// This exports your app as a serverless function
// Vercel will run this 'app'
module.exports = app;


// --- REMOVE THIS FOR VERCEL ---
// You MUST remove this app.listen() block.
// Vercel cannot run a server that is already trying to listen on a port.
/*
app.listen(port, () => {
  console.log(`🚀 Appoint'd backend server is running on http://localhost:${port}`);
});
*/