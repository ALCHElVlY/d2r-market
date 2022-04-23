// Internal imports
import {
	axiosPrivate
} from '../../app/axiosPrivate.js';

// API Endpoint
const USERS_ENDPOINT = '/api/users';


/**
 * The register function sends the user payload to the server,
 * registering fresh user data in the database.
 * @param {object} payload
 */
const register = async (payload) => {
	const response = await axiosPrivate.post(`${USERS_ENDPOINT}/register`, payload);

	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The login function sends the user payload to the server,
 * authenticating the user and logging them into the application.
 * @param {object} payload
 */
const login = async (payload) => {
	const response = await axiosPrivate.post(`${USERS_ENDPOINT}/login`, payload);

	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The logout function sends the user payload to the server,
 * logging the user out of the application.
 * @param {obejct} payload
 */
const logout = async (payload) => {
	const response = await axiosPrivate.get(`${USERS_ENDPOINT}/${payload.id}/logout`, {
		user: payload,
	});

	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The updateUser function sends the user payload to the server,
 * updating the user data in the database.
 * @param {object} payload 
 */
const updateUser = async (payload) => {
	const response = await axiosPrivate.patch(`${USERS_ENDPOINT}/${payload?.user.id}`, payload);

	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The delete function logs the user out of the application and deletes
 * the user data from the database.
 * @param {object} payload
 * @returns {Promise<*>}
 */
const deleteUser = async (payload) => {
	await axiosPrivate.delete(`${USERS_ENDPOINT}/${payload.id}`, {
		user: payload,
	});
};

// Declare a auth service object
// to export and use
const authService = {
	register,
	login,
	logout,
	updateUser,
	deleteUser,
};

export default authService;