/* eslint-disable no-inline-comments */
// External imports
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const { rateLimit } = require('express-rate-limit');

// Internal imports
const corsConfig = require('./database/config/corsConfig.js');
const connectDatabase = require('./database/config/db');
const { userRoutes, oauthRoutes } = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5000;
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute(s)
  max: 1000, // limit each IP to 1000 requests per windowMs
  standardHeaders: true, // set standard rate limit headers
  message: 'Too many requests have been made, please try again later.',
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
 * The StartServer function initialises the
 * database and express server connections asynchronously.
 */
const StartServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};
StartServer();
