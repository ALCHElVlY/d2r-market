// External imports
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Internal imports
const User = require('../database/models/User');


/**
 * The registerUser function takes in the req and res objects
 * and uses the User model to create a new user.
 * @param {*} req
 * @param {*} res
 */
const registerUser = async (req, res) => {
	try {
		const {
			email,
			password
		} = req.body;

		// Check if an email and password was provided
		if (!email || !password) {
			return res.status(400)
				.json({
					message: 'Missing required fields'
				});
		}

		// Check if an account already exists with the given email
		const userExists = await User.findOne({
			email
		});
		if (userExists) {
			return res.status(400)
				.json({
					message: 'Email already registered'
				});
		}

		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user
		await User.create({
				email,
				password: hashedPassword
			})
			.then((user) => {
				res.status(201).json({
					id: user._id,
					username: user.username,
					customAvatar: user.customAvatar,
					platform: user.platform,
					onlineStatus: user.onlineStatus,
					token: generateToken(user._id),
				})
			})
			.catch(() => res.json({
				message: 'There was an error registering the user'
			}));
	} catch (e) {
		res.status(500).send({
			message: e.message
		});
	}
};

/**
 * The loginUser function takes in the req and res objects
 * and uses the User model to find a user with the given email and logs them in.
 * @param {*} req
 * @param {*} res
 */
const loginUser = async (req, res) => {
	const {
		email,
		password
	} = req.body;

	// Check for a valid user email
	const user = await User.findOne({
		email
	});
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			id: user._id,
			username: user.username,
			customAvatar: user.customAvatar,
			platform: user.platform,
			onlineStatus: user.onlineStatus,
			token: generateToken(user._id),
		});
	} else {
		res.status(400).json({
			message: 'Invalid credentials'
		});
	}
};

/**
 * The logoutUser functions logs the user out of the application
 * @param {*} req 
 * @param {*} res 
 */
const logoutUser = (req, res) => {
	res.status(200).json({
		succes: true,
	});
};

/**
 * The updateUser function takes in the req and res objects
 * and utilizes the User model to find a user with the given id and updates their data.
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
	// Find the user by their id
	const user = await User.findById(req.params.id);
	const {
		newPassword,
		newEmail,
		status,
	} = req.body.data;
	
	if (newEmail && !newPassword) {
		// Check if the user provided the correct password
		const validPassword = await bcrypt.compare(req.body?.data?.currentPassword, user.password);
		if (!validPassword) return res.status(400)
			.json({ message: 'Invalid password' });
		// Check if the new email is already in use
		const emailExists = await User.findOne({
			email: newEmail
		});
		if (emailExists) return res.status(400)
			.json({ message: 'Email already registered' });

		// Update the user's email
		user.email = newEmail;

		// Save the user
		await user.save()
			.then(() => res.status(200).json({
				id: user._id,
				username: user.username,
				customAvatar: user.customAvatar,
				platform: user.platform,
				onlineStatus: user.onlineStatus,
				token: generateToken(user._id),
			}));
	}
	if (!newEmail && newPassword) {
		// Check if the user provided the correct password
		const validPassword = await bcrypt.compare(req.body?.data?.currentPassword, user.password);
		if (!validPassword) return res.status(400)
			.json({ message: 'Invalid password' });

		// Hash the new password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		
		// Update the user's email
		user.password = hashedPassword;

		// Save the user
		await user.save()
			.then(() => res.status(200).json({
				id: user._id,
				username: user.username,
				customAvatar: user.customAvatar,
				platform: user.platform,
				onlineStatus: user.onlineStatus,
				token: generateToken(user._id),
			}));
	}
	if (status) {
		// Set the user's new status
		user.onlineStatus = status;

		// Save the user
		await user.save()
			.then(() => res.status(200).json({
				id: user._id,
				username: user.username,
				customAvatar: user.customAvatar,
				platform: user.platform,
				onlineStatus: user.onlineStatus,
				token: generateToken(user._id),
			}));
	}
};

/**
 * The getUser function takes in the req and res objects and
 * returns the user's current data.
 * @param {*} req 
 * @param {*} res
 */
const getUser = async (req, res) => {
	try {
		// Find the user by their id
		const findUserByID = await User.findById(req.params.id);
		if (!findUserByID) return res.status(404).json({
			message: 'User not found'
		});

		// Return the user's data
		res.status(200).json({
			id: user._id,
			username: user.username,
			customAvatar: user.customAvatar,
			platform: user.platform,
			onlineStatus: user.onlineStatus,
			token: generateToken(user._id),
		});
	} catch (e) {
		console.log(e);
		if (e.name === 'TokenExpiredError') {
			res.status(401).json({
				message: 'Token expired',
			});
		};

		res.status(500).send({
			message: e.message,
		});
	}
};

/**
 * The getOnlineUsers function makes a request to the server to
 * retrieve all the users that are currently marked online.
 * @param {*} req 
 * @param {*} res 
 */
const getOnlineUsers = async (req, res) => {
	try {
		// Find all the users that are online
		const onlineUsers = await User.find({
			onlineStatus: 'online',
		})
		.count();

		// Return the users
		res.status(200).json(onlineUsers);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: e.message,
		});
	}
};

/**
 * The getOnlineTraders function makes a request to the server to
 * retrieve all the users that are currently marked online in-game.
 * @param {*} req 
 * @param {*} res 
 */
 const getOnlineTraders = async (req, res) => {
	try {
		// Find all the users that are online in-game
		const onlineTraders = await User.find({
			onlineStatus: 'online in game',
		})
		.count();

		// Return the users
		res.status(200).json(onlineTraders);
	} catch (e) {
		console.log(e);
		res.status(500).send({
			message: e.message,
		});
	}
};

/**
 * The deleteUser function takes in the req and res objects
 * and utilizes the User model to find a user with the given id and deletes
 * them from the database.
 * @param {*} req 
 * @param {*} res
 */
const deleteUser = async (req, res) => {
	try {
		// Delete the user
		await User.findByIdAndDelete(req.params.id)
			.then(() => res.status(200).json({
				succes: true,
			}))
			.catch(() => res.status(400).json({
				succes: false,
			}));
	} catch (e) {
		console.log(e);
		if (e.name === 'TokenExpiredError') {
			res.status(401).json({
				message: 'Token expired',
			});
		};

		res.status(500).send({
			message: e.message,
		});
	}
};

// Generate JWT access token
const generateToken = (id) => {
	return jwt.sign({ id },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: '2h' });
};

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	updateUser,
	getUser,
	getOnlineUsers,
	getOnlineTraders,
	deleteUser,
};