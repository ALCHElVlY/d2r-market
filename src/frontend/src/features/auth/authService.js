/* eslint-disable no-undef */
// External imports
import axios from 'axios';

// Declare a variable for the user api
const API_URL = '/api/users';


/**
 * The register function takes in a user object and sends it to the server,
 * registering a new user.
 * @param {*} userData
 */
const register = async (userData) => {
	const response = await axios.post(`${API_URL}/register`, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

/**
 * The login function takes in a user object and sends it to the server,
 * logging the user into the application.
 * @param {*} userData
 */
const login = async (userData) => {
	const response = await axios.post(`${API_URL}/login`, userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

/**
 * The logout function logs the user out of the application.
 */
const logout = () => {
	localStorage.removeItem('user');
};

/**
 * The delete function logs the user out of the application and deletes
 * the user from the database.
 */
const deleteUser = async (userData) => {
	const response = await axios.delete(`${API_URL}/${userData.id}`, {
		headers: { 'Authorization': `Bearer ${userData.token}` },
	});

	if (response) logout();
};

// Declare a auth service object
// to export and use
const authService = {
	register,
	login,
	logout,
	deleteUser,
};

export default authService;