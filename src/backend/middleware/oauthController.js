// External imports
const axios = require('axios');
const btoa = require('btoa');

// Internal imports
// const User = require('../database/models/User.js');


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
		'Content-Type': 'application/x-www-form-urlencoded',
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
const getBnetCredentials = async (token) => {
	try {
		const response = await axios.get(process.env.BNET_USERS_ENDPOINT, {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (response) return response.data;
	}
	catch (e) {
		console.log(e);
	}
};

/**
 * Middleware function to handle the Battle.net OAuth flow.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const handleBnetOAuth = async (req, res, next) => {
	const scopes = ['openid'];
	const { code } = req.query;
	const closeWindow = () => {
		const close = () => window.close();
		return `
        <script>
            ${close}
            window.addEventListener('load', ${close});
        </script>`;
	};

	try {
		// Initialise the BNET OAuth flow
		const oauthResponse = await initBnetOAuth(scopes, code);

		// handle errors
		if (oauthResponse.status !== 200) {
			console.log(`Token request failed with "${oauthResponse.statusMessage}"`);
			return next(new Error(oauthResponse.statusMessage));
		}

		// Get the user's data from the BNET API
		const { access_token } = oauthResponse.data;
		const credentials = await getBnetCredentials(access_token);
		const data = {
			bnet: {
				id: credentials.id,
				battletag: credentials.battletag,
			},
		};

		// Get the user id from the oauth cookie
		const { oauth } = req.cookies;
		const { id, token } = JSON.parse(oauth);

		// Save the user's credentials to the database
		let userID;
		switch (/[0-9a-z]+/gm.test(id)) {
		case true:
			userID = id;
			break;
		default:
			throw new Error('Invalid user id');
		}
		const response = await axios.patch(`${process.env.USERS_ENDPOINT}/${userID}`, { data }, {
			headers: { Authorization: `Bearer ${token}` },
		});

		if (response.status === 200) {
			res.clearCookie('oauth');
			return res.send(closeWindow());
		}

	}
	catch (e) {
		// Handle if the user denies the app access to their BNET account
		if (e.response.status === 400) {
			res.clearCookie('oauth');
			return res.send(closeWindow());
		}
		console.log(e);
	}
};


module.exports = {
	handleBnetOAuth,
};