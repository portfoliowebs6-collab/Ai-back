const imageService = require('../services/imageService');

exports.analyzeImage = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ status: 'error', message: 'Image file is required' });
        }
        const result = await imageService.processImage(req.file.path);
        res.status(200).json({ status: 'success', data: result });
    } catch (error) {
        next(error);
    }
};
