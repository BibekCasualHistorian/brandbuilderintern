const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  products: {
    type: [String],
  },
});

const ProductCategoryModel = mongoose.model(
  "product-Category",
  productCategorySchema
);

module.exports = ProductCategoryModel;
