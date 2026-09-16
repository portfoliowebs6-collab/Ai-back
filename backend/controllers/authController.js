const User = require('../models/User');

// Register User
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, error: 'User already exists with this email' });
    }

    // Create new user (Password automatically hash ho jayega pre-save hook se)
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully!',
      data: { id: newUser._id, name: newUser.name, email: newUser.email }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid email or password' });
    }

    // Compare password using bcrypt method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Invalid email or password' });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful!',
      data: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
