const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  price: Number,
  fastDelivery: Boolean,
  inStock: Boolean,
  offer: Number,
  starRating: Number,
  totalReviews: Number,
  categories: String,
});

const Product = mongoose.model("Product", productSchema)

module.exports = { Product }
