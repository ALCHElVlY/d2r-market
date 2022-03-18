// Import express
const express = require('express');

// Import the db connection
const connectDB = require('./database/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Express body parser
app.use(express.json());

// Import the routes
const {
	userRoutes,
} = require('./routes/index');

// Route the API requests
app.use('/api/users', userRoutes);

/**
 * The connectServer function initialises the
 * database and express server connections.
 */
const connectServer = async () => {
	await connectDB();
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
connectServer();