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
	
	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The login function takes in a user object and sends it to the server,
 * logging the user into the application.
 * @param {*} userData
 */
const login = async (userData) => {
	const response = await axios.post(`${API_URL}/login`, userData);
	
	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The logout function takes in a user object and logs the user out of
 * the application.
 * @param {*} userData 
 * @returns 
 */
const logout = async (userData) => {
	const response = await axios.get(`${API_URL}/${userData.id}`, {
		headers: { 'Authorization': `Bearer ${userData.token}` },
	});
	return response.data;
};

/**
 * The updateUser function takes in a user object and
 * updates the users data in the database.
 * @param {*} userData 
 */
const updateUser = async (userData) => {
	const response = await axios.patch(`${API_URL}/${userData.user.id}`, userData.data, {
		headers: { 'Authorization': `Bearer ${userData.user.token}` },
	});
	
	if (response.status === 200) {
		return response.data;
	}
};

/**
 * The delete function logs the user out of the application and deletes
 * the user from the database.
 */
const deleteUser = async (userData) => {
	await axios.delete(`${API_URL}/${userData.id}`, {
		headers: { 'Authorization': `Bearer ${userData.token}` },
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