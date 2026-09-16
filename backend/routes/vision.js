const express = require('express');
const router = express.Router();
const { handleVision } = require('../controllers/visionController');
const upload = require('../middleware/upload');

// POST /api/vision (Image file upload ke sath)
router.post('/', upload.single('image'), handleVision);

module.exports = router;
