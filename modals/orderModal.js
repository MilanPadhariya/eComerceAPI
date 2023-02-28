const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    validate: [validator.isDate, "enter a valid creation date"],
  },
  total: {
    type: Number,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
