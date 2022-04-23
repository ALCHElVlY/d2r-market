// Internal imports
const express = require('express');

// External imports
const router = express.Router();
const protect = require('../../middleware/authController.js');
const {
	registerUser,
	loginUser,
	logoutUser,
	updateUser,
	getUser,
	deleteUser,
} = require('../../middleware/userController');

// @desc HTTP POST to register a new user
// @route POST api/users/register
// @access Public
router.post('/register', registerUser);

// @desc HTTP POST to authenticate a user and log them in
// @route POST api/users/login
// @access Public
router.post('/login', loginUser);

// @desc HTTP GET to authenticate a user and log them out
// @route GET api/users/:id/logout
// @access Public
router.get('/:id/logout', logoutUser);

// @desc HTTP PATCH to update the users data in the database
// @route PATCH api/users/:id
// @access Private
router.patch('/:id', protect, updateUser);

// @desc HTTP DELETE to remove a user from the database
// @route DELETE api/users/:id
// @access Private
router.delete('/:id', protect, deleteUser);

module.exports = router;