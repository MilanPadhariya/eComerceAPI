const mongoose = require("mongoose");

const order_ProductsSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.ObjectId,
    ref: "Order",
  },
  productId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
});

const Order_Products = mongoose.model("Order_Products", order_ProductsSchema);
module.exports = Order_Products;
