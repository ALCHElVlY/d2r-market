// Import our environment variables
require('dotenv').config();

// Import mongoose
const mongoose = require('mongoose');

/**
 * The connectDB function initialises the mongoDB connection.
 */
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connection sucessful!');
	}
	catch (error) {
		console.error('MongoDB connection failed.');
		process.exit(1);
	}
};

module.exports = connectDB;