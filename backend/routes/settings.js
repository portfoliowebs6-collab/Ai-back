// routes/settings.js
const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const verifyAuth = require('../middleware/auth');

router.get('/', verifyAuth, settingsController.getSettings);
router.put('/', verifyAuth, settingsController.updateSettings);

module.exports = router;
