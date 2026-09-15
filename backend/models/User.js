const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true }, // Firebase UID link
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    credits: { type: Number, default: 5 }, // Free credits for image/ai generation
    adWatchedCount: { type: Number, default: 0 }, // Track ads watched for monetization
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
