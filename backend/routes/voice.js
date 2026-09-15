const express = require('express');
const router = express.Router();
const voiceController = require('../controllers/voiceController');
const verifyAuth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/process', verifyAuth, upload.single('audio'), voiceController.handleVoice);

module.exports = router;
