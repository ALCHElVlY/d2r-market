// External imports
const express = require('express');
const cookieParser = require('cookie-parser');
const { rateLimit } = require('express-rate-limit');
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
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute(s)
	max: 1000, // limit each IP to 100 requests per windowMs
	standardHeaders: true, // set standard rate limit headers
});

// Express middleware
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(limiter);

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