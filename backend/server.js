const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chat');
const voiceRoutes = require('./routes/voice');
const visionRoutes = require('./routes/vision');
const authRoutes = require('./routes/auth');
// ... baaki code ke sath niche ye add karo:

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/voice', voiceRoutes);
app.use('/api/vision', visionRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running successfully with bcrypt support!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
