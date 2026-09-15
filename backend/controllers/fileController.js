const storageService = require('../services/storageService');

exports.uploadFile = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ status: 'error', message: 'No file uploaded' });
        }
        const fileUrl = await storageService.uploadToCloud(req.file.path);
        res.status(200).json({ status: 'success', fileUrl });
    } catch (error) {
        next(error);
    }
};
