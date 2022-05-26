// External imports
const mongoose = require('mongoose');
const OrdersDB = mongoose.connection.useDb(process.env.ORDERS_DATABASE);

// Define the order schema
const OrderSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    item: {
      name: {
        type: String,
        required: true,
      },
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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
  },
  {
    timestamps: true,
  },
);

// Convert the schema to a model
// and export it
const Order = OrdersDB.model('order', OrderSchema);
module.exports = Order;
