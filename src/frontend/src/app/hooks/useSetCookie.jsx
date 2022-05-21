/**
 * A re-usable (fake) REACT hook to handle setting the oauth cookie.
 * @param {String} name The name of the cookie
 * @param {object} value The value of the cookie  
 * @param {object} options Options for the cookie
 */
const setCookie = (name, value, options = {}) => {
    // Type guard to ensure the value is an object
    if (typeof value !== 'object') throw TypeError('Value must be an object');

    options = {
        ...options,
        path: '/',
        // secure: true,
        // sameSite: 'strict',
        'max-age': 1000 * 10,
    };
    // If the expires option is passed, format it
    if (options.expires) {
        options.expires = new Date(options.expires.toUTCString());
    }

    let cookie = name + '=' + JSON.stringify(value);
    for (let optionKey in options) {
        cookie += '; ' + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            cookie += '=' + optionValue;
        }
    }

    // Return the cookie
    document.cookie = cookie;
}

export default setCookie;