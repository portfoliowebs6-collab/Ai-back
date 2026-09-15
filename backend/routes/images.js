const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const verifyAuth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/analyze', verifyAuth, upload.single('image'), imageController.analyzeImage);

module.exports = router;
