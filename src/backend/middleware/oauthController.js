// External imports
const axios = require('axios');
const btoa = require('btoa');

// Internal imports
const User = require('../database/models/User.js');


/**
 * The initBnetOAuth function requests access to the user's **BNET** account,
 * and is the first part of the authorization code flow,
 * @param {Array} scopes An array of scopes to request access to
 * @param {*} code Specifies the type of authorization request being made
 */
const initBnetOAuth = async (scopes, code) => {
    // Build the request headers
    const basicAuth = btoa(
        `${process.env.BNET_CLIENT_ID}:${process.env.BNET_CLIENT_SECRET}`,
    );
    const headers = {
        authorization: `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    // Build the request body
    const params = new URLSearchParams();
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('scope', scopes.join(' '));
    params.append('grant_type', 'authorization_code');
    params.append('code', code);

    // Build the request options
    const options = {
        headers: headers,
        params: params,
    };

    return await axios.post(
        process.env.BNET_TOKEN_ENDPOINT,
        null,
        options,
    );
};

/**
 * Returns basic information about the BNET user associated with the current token.
 * @param {String} token The access token to use for the request
 */
const getBnetUser = async (token) => {
    const response = await axios.get(process.env.BNET_USERS_ENDPOINT, {
        headers: { Authorization: `Bearer ${token}` },
    });
    
    if (response) return response.data;
};

const getAssociatedUser = async (data) => {
    const { id, battletag } = data;

    // Find a registered user with an associated BNET account
    const user = await User.findOne({
        'linkedAccounts.bnet.battletag': battletag,
    });
    console.log(user);
};

const handleBnetOAuth = async (req, res, next) => {
    const scopes = ['openid'];
    const { code } = req.query;

    // Initialise the BNET OAuth flow
    const oauthResponse = await initBnetOAuth(scopes, code);

    // handle errors
    if (oauthResponse.status !== 200) {
        console.log(oauthResponse);
        console.log(`Token request failed with "${oauthResponse.statusText}"`);
        return next(new Error(oauthResponse.statusText));
    }

    // Get the user's data from the BNET API
    const { access_token } = oauthResponse.data;
    const response = await getBnetUser(access_token);
    await getAssociatedUser(response);
};

module.exports = {
    handleBnetOAuth,
};