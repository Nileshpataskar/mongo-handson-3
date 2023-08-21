const mongoose = require("mongoose");

const product_structure = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discountPercentage: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
 
});

const Products = mongoose.model("Products", product_structure);
module.exports = Products;
