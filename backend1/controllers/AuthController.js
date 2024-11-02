const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const sendResponse = require('../utils/sendResponse'); // Adjust if needed for your structure

class AuthController {
  static async signUp(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendResponse(res, 400, 'Validation error', errors.array());
    }

    const { email, password } = req.body;

    try {
      // Check if email is already in use
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return sendResponse(res, 400, 'Email already in use');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      sendResponse(res, 201, 'User created successfully');
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, 'Internal Server Error');
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return sendResponse(res, 401, 'Invalid credentials');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return sendResponse(res, 401, 'Invalid credentials');
      }

      // Generate and send JWT here (implement as needed)
      sendResponse(res, 200, 'Login successful');
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, 'Internal Server Error');
    }
  }
}

module.exports = AuthController;
