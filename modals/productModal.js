const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
