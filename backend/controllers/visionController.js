const { processVision } = require('../services/visionService');

// Handle vision/image analysis
exports.handleVision = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Image file is required' });
    }

    const visionResult = await processVision(req.file);

    res.status(200).json({
      success: true,
      data: visionResult
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
