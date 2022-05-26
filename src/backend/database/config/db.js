require('dotenv').config();

// External imports
const mongoose = require('mongoose');

/**
 * The connectDatabase function initialises the mongoDB connection.
 */
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DEFAULT_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection sucessful!');
  } catch (error) {
    console.error('MongoDB connection failed.');
    process.exit(1);
  }
};

module.exports = connectDatabase;
