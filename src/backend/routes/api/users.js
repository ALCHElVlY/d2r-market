// Internal imports
const express = require('express');

// External imports
const router = express.Router();
const protect = require('../../middleware/authControllers.js');
const {
	registerUser,
	loginUser,
	updateUser,
} = require('../../middleware/userControllers');

// @desc HTTP POST to register a new user
// @route POST api/users/register
// @access Public
router.post('/register', registerUser);

// @desc HTTP POST to authenticate a user and log them in
// @route POST api/users/login
// @access Public
router.post('/login', loginUser);

// @desc HTTP PATCH to update the users data in the database
// @route PATCH api/users/:id
// @access Private
router.patch('/:id', protect, updateUser);

module.exports = router;