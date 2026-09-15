exports.getUserHistory = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'success', history: [] });
    } catch (error) {
        next(error);
    }
};

exports.deleteHistoryItem = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'success', message: 'History deleted' });
    } catch (error) {
        next(error);
    }
};
