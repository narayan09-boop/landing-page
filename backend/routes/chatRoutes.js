const express = require('express');
const router = express.Router();
const { handleChatRequest } = require('../controllers/chatController');

// Define the API route
// When a POST request comes to /api/mira-chat, it will run the handleChatRequest function
router.post('/mira-chat', handleChatRequest);

module.exports = router;