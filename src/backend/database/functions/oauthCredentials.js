// External imports
const jwt = require('jsonwebtoken');


/**
 * The generateCredentials functions takes in the email and password
 * of the user and creates oauth credentials for them.
 * @param {String} email The email of a user
 * @param {String} password The password of a user
 */
const generateCredentials = (email, password) => {
    return jwt.sign({
        email: email,
        password: password,
    }, process.env.ACCESS_TOKEN_SECRET);
};

const decodeCredentials = (credentials) => {
    const { email, password } = jwt.verify(credentials, process.env.ACCESS_TOKEN_SECRET);
    return { email, password };
};

module.exports = {
    generateCredentials,
    decodeCredentials,
};