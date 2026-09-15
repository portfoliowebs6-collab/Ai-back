const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');
const verifyAuth = require('../middleware/auth');

router.get('/:userId', verifyAuth, historyController.getUserHistory);
router.delete('/:id', verifyAuth, historyController.deleteHistoryItem);

module.exports = router;
