exports.register = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        // User registration logic with Firebase/MongoDB and bcrypt
        res.status(201).json({ status: 'success', message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Login authentication logic
        res.status(200).json({ status: 'success', message: 'Logged in successfully' });
    } catch (error) {
        next(error);
    }
};
