// Internal imports
import {
	axiosPrivate,
} from '../../axiosPrivate.js';

// API Endpoint
const USERS_ENDPOINT = process.env.REACT_APP_USERS_ENDPOINT;


/**
 * The setCredentials function sends a request to the server to
 * fetch the user's oauth credentials from the database and store
 * them in application state.
 * @param {object} payload
 */
const setCredentials = async (payload) => {
	const response = await axiosPrivate.patch(`${USERS_ENDPOINT}/${payload}`);

	if (response.status === 200) {
		const {
			linkedAccounts,
		} = response.data;
		return linkedAccounts;
	}
};


/**
 * The getCredentials function sends a request to the server,
 * retrieving the user's credentials from the database.
 * @param {object} payload
 */
const getCredentials = async (payload) => {
	const response = await axiosPrivate.get(`${USERS_ENDPOINT}/${payload.id}`);

	if (response.status === 200) {
		const {
			linkedAccounts
		} = response.data;
		return linkedAccounts;
	}
};


/**
 * The resetCredentials function resets the oauth credentials when a user
 * deletes their account.
 * @param {object} payload
 */
const resetCredentials = async (payload) => {
	if (payload.length > 0) {
		return payload = [];
	}
};




// Declare a auth service object
// to export and use
const oauthService = {
	setCredentials,
	getCredentials,
	resetCredentials,
};

export default oauthService;