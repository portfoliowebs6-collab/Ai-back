const aiService = require('../services/aiService');

// Handle incoming chat messages
exports.handleChat = async (req, res, next) => {
    try {
        const { message, history } = req.body;
        
        if (!message) {
            return res.status(400).json({ status: 'error', message: 'Message content is required' });
        }

        // Call AI Service to get the response
        const aiResponse = await aiService.generateTextResponse(message, history);

        res.status(200).json({
            status: 'success',
            response: aiResponse
        });
    } catch (error) {
        next(error);
    }
};

// Fetch user chat history
exports.getHistory = async (req, res, next) => {
    try {
        const { userId } = req.params;
        
        // Placeholder for fetching history from MongoDB/Firestore
        res.status(200).json({
            status: 'success',
            message: 'History fetched successfully',
            data: []
        });
    } catch (error) {
        next(error);
    }
};
