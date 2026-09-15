// controllers/userController.js
exports.getProfile = async (req, res, next) => {
    try { res.status(200).json({ status: 'success', user: req.user }); } catch (error) { next(error); }
};
exports.updateProfile = async (req, res, next) => {
    try { res.status(200).json({ status: 'success', message: 'Profile updated' }); } catch (error) { next(error); }
};
