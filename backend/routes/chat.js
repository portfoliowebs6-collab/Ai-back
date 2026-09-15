const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const verifyAuth = require('../middleware/auth');

// Protected routes (requires Firebase token authentication)
router.post('/', verifyAuth, chatController.handleChat);
router.get('/history/:userId', verifyAuth, chatController.getHistory);

module.exports = router;
