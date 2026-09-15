const voiceService = require('../services/voiceService');

exports.handleVoice = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ status: 'error', message: 'Audio file is required' });
        }
        const result = await voiceService.processAudio(req.file.path);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        next(error);
    }
};
