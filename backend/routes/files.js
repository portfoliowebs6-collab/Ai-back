const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const verifyAuth = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/upload', verifyAuth, upload.single('file'), fileController.uploadFile);

module.exports = router;
