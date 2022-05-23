// External imports
const jwt = require('jsonwebtoken');


/**
 * The generateToken function takes in a user id and
 * creates an API access token.
 * @param {String} id The user's id
 */
const generateToken = (id) => {
	return jwt.sign({ id },
		process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: '4h' });
};

module.exports = generateToken;