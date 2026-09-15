const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    type: { type: String, enum: ['ad_reward', 'credit_purchase'], required: true },
    amount: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'completed'], default: 'completed' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
