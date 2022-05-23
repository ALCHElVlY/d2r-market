// External imports
const mongoose = require('mongoose');
const ServicesDB = mongoose.connection.useDb(process.env.SERVICES_DATABASE);

// Define the service schema
const ServiceSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	description: {
		type: Number,
		required: true,
		maxlength: 2500,
	},
	user: {
		id: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},

}, {
	timestamps: true,
});

// Convert the schema to a model
// and export it
const Service = ServicesDB.model('service', ServiceSchema);
module.exports = Service;