const { processSpeech } = require('../services/speechService');

// Handle voice/audio processing
exports.handleVoice = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Audio file is required' });
    }

    const speechResult = await processSpeech(req.file);

    res.status(200).json({
      success: true,
      data: speechResult
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
