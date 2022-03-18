// Import express
const express = require('express');

// Declare the router
const router = express.Router();

// Import the protect middleware
const protect = require('../../middleware/authControllers');

// Import the user middleware
const {
	registerUser,
    loginUser,
    getMe,
} = require('../../middleware/userControllers');

// @desc HTTP POST to register a new user
// @route POST api/users/register
// @access Public
router.post('/register', registerUser);

// @desc HTTP POST to authenticate a user and log them in
// @route POST api/users/login
// @access Public
router.post('/login', loginUser);

// @desc HTTP GET to retrieve user data
// @route GET api/users/me
// @access Private
router.get('/me', protect, getMe);

module.exports = router;