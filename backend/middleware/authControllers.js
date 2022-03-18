const jwt = require('jsonwebtoken');
const User = require('../database/models/User');

/**
 * The protect function takes in the req and res objects
 * and checks for a valid token for authorization.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const protect = async (req, res, next) => {
    let token;

    // Check for token in header
    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get the user from the token
            req.user = await User.findById(decoded.id).select('-password');

            // Continue to the next middleware
            next();
        }
        catch (e) {
            res.status(401).send({ message: 'Not authorized' });
        }
    }

    // Handle if no token was provided
    if (!token) {
        res.status(401).send({
            message: 'Not authorized, no token was provided',
        });
    }
}

module.exports = protect;