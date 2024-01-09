const ProductCategoryModel = require("../models/productCategoryModel");
const UserModel = require("../models/userModel");

const createProductCategory = async (req, res) => {
  const { _id, products } = req.body;
  console.log(_id, products);
  try {
    const doesUserExist = await UserModel.findOne({ _id });
    if (!doesUserExist) {
      throw Error("User Simply doesn't Exist");
    }
    const createdProductCategory = await ProductCategoryModel.create();
    return res
      .status(200)
      .json({ success: true, data: createdProductCategory });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { createProductCategory };
