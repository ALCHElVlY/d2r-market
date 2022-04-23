// External imports
const express = require('express');
const cookieParser = require('cookie-parser');

// Internal imports
const connectDB = require('./database/config/db');
const {
	userRoutes,
} = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Express middleware
app.use(express.json());
app.use(cookieParser());

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