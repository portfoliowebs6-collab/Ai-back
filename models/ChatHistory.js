const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
    userId: { type: String, required: true },
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    type: { type: String, enum: ['text', 'voice', 'image'], default: 'text' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
