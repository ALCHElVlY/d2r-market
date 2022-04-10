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
			.then((user) => res.status(201).json({
				id: user._id,
				username: user.username,
				customAvatar: user.customAvatar,
				platform: user.platform,
				onlineStatus: user.onlineStatus,
				token: generateToken(user._id),
			}))
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
 * and uses the User model to find a user with the given emailand logs them in.
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
 * The updateUser function takes in the req and res objects
 * and utilizes the User model to find a user with the given id and updates their data.
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
	console.log(req.body);
	// Find the user with the given id
	// const user = await User.findById(req.params.id);


	/* await User.findByIdAndUpdate(req.params.id, req.body)
		.then(() => res.status(200).json({ succes: true }))
		.catch(() => res.status(400).json({ succes: false }));*/
};


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

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({
		id
	}, process.env.JWT_SECRET, {
		expiresIn: '2h'
	});
};

module.exports = {
	registerUser,
	loginUser,
	updateUser,
	deleteUser,
};