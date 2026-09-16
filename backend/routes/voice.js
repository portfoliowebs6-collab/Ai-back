const express = require('express');
const router = express.Router();
const { handleVoice } = require('../controllers/voiceController');
const upload = require('../middleware/upload');

// POST /api/voice (Audio file upload ke sath)
router.post('/', upload.single('audio'), handleVoice);

module.exports = router;
