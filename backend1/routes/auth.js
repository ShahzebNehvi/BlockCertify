const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many signup attempts from this IP, please try again later.',
});

// Sign-up route
router.post(
  '/signup',
  signupLimiter,
  [
    body('email')
      .isEmail().withMessage('Invalid email format'),
    body('password')
      .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
      .matches(/[0-9]/).withMessage('Password must contain at least one number')
      .matches(/[!@#$%^&*]/).withMessage('Password must contain at least one special character')
      .custom((value) => {
        if (value.toLowerCase() === 'hello') {
          throw new Error('Password is too weak. Please choose a stronger password.');
        }
        return true;
      }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        message: 'Validation error',
        errors: errors.array(),
      });
    }
    next(); // Proceed to the AuthController signUp if there are no validation errors
  },
  AuthController.signUp
);

// Login route
router.post('/login', AuthController.login);

module.exports = router;
