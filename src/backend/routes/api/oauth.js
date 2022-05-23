// External imports
const express = require('express');
const router = express.Router();

// Internal imports
// const protect = require('../../middleware/authController');
const {
	handleBnetOAuth,
	// handleXboxOauth,
	// handleDiscordOauth,
} = require('../../middleware/oauthController');

// @desc HTTP GET an authenticated user via battle.net oauth and log them in
// @route GET api/oauth/bnet
// @access Public
router.get('/bnet', handleBnetOAuth);

// @desc HTTP GET an authenticated user via xbox oauth and log them in
// @route GET api/oauth/xbox
// @access Public
// router.get('/xbox', handleXboxOauth);

// @desc HTTP GET an authenticated user via discord oauth and log them in
// @route GET api/oauth/discord
// @access Public
// router.get('/discord', handleDiscordOauth);

module.exports = router;