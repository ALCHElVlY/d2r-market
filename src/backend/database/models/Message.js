// External imports
const mongoose = require('mongoose');
const MessagesDB = mongoose.connection.useDb(process.env.MESSAGES_DATABASE);

// Define the message schema
const MessageSchema = new mongoose.Schema(
  {
    chatID: {
      type: String,
      required: true,
      unique: true,
    },
    body: {
      type: String,
      required: true,
      maxlength: 2500,
    },
    toUser: {
      id: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    fromUser: {
      id: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

// Convert the schema to a model
// and export it
const Message = MessagesDB.model('message', MessageSchema);
module.exports = Message;
