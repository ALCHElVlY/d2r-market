// Internal imports
const express = require('express');

// External imports
const router = express.Router();
const protect = require('../../middleware/authControllers.js');
const {
	registerUser,
	loginUser,
	getUser,
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
// @route GET api/users/:id
// @access Private
router.get('/:id', protect, getUser);

module.exports = router;