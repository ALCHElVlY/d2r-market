// Internal imports
import {
	axiosPrivate
} from '../../axiosPrivate.js';

// API Endpoint
const USERS_ENDPOINT = process.env.REACT_APP_USERS_ENDPOINT;



const setCredentials = async (payload) => {
    const response = await axiosPrivate.patch(`${USERS_ENDPOINT}/${payload}`);

	if (response.status === 200) {
		const { linkedAccounts } = response.data;
		return linkedAccounts;
	}
};


/**
 * The getCredentials function sends a request to the server,
 * retrieving the user's credentials from the database.
 * @param {object} payload
 */
 const getCredentials = async (payload) => {
	const response = await axiosPrivate.get(`${USERS_ENDPOINT}/${payload}`);

	if (response.status === 200) {
		const { linkedAccounts } = response.data;
		return linkedAccounts;
	}
};




// Declare a auth service object
// to export and use
const oauthService = {
    setCredentials,
	getCredentials
};

export default oauthService;