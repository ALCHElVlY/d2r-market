// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		sparse: true,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: false,
		default: null,
	},
	customAvatar: {
		type: String,
		required: false,
		default: null,
	},
	onlineStatus: {
		type: String,
		required: false,
		default: 'invisible',
	},
	platform: {
		type: String,
		required: false,
		default: null,
	},
	trustLevel: {
		type: Number,
		required: false,
		default: 0,
	},
	linkedAccounts: [{
		steam: {
			username: {
				type: String,
				required: true,
				unique: true,
				sparse: true,
			},
			id: {
				type: String,
				required: true,
				unique: true,
				sparse: true,
			},
		},
		xbox: {
			username: {
				type: String,
				required: true,
				unique: true,
				sparse: true,
			},
		},
		discord: {
			username: {
				type: String,
				required: true,
				unique: true,
				sparse: true,
			},
			id: {
				type: String,
				required: true,
				unique: true,
				sparse: true,
			},
		},
	}],
}, {
	timestamps: true,
});

// Convert the schema to a model
// and export it
const User = mongoose.model('user', UserSchema);
module.exports = User;