require("dotenv").config();

// External imports
const express = require('express');
const router = express.Router();

// Internal imports
const {
    handleBnetOAuth
} = require('../../middleware/oauthController');

// @desc HTTP GET an authenticated user via blizzard oauth and log them in
// @route GET api/oauth/blizzard
// @access Public
router.get('/blizzard', handleBnetOAuth);

module.exports = router;