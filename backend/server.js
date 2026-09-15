const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import Routes
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const voiceRoutes = require('./routes/voice');
const imageRoutes = require('./routes/images');
const fileRoutes = require('./routes/files');
const historyRoutes = require('./routes/history');
const userRoutes = require('./routes/users');
const settingsRoutes = require('./routes/settings');

// Import Error Handler Middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Mounting
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings', settingsRoutes);

// Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Kewa AI Backend is running live!' });
});

// Error Handling Middleware (Always at the end)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running smooth on port ${PORT}`);
});
