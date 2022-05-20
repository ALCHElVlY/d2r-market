// External imports
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Internal imports
const connectDB = require('./database/config/db');
const corsConfig = require('./database/config/corsConfig.js');
const {
	userRoutes,
	oauthRoutes,
} = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;

// Express middleware
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route the API requests
app.use('/oauth', oauthRoutes);
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