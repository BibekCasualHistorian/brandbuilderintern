const StoreModel = require("../models/storeModel");
const UserModel = require("../models/userModel");

const createStore = async (req, res) => {
  const { _id, bussinessPartnerType, linkStores } = req.body;

  console.log(_id, bussinessPartnerType, linkStores);

  try {
    const user = await UserModel.findOne({ _id });
    if (!user) {
      throw Error("There exist no such user");
    }
    const createdStore = await StoreModel.create({
      user_id: _id,
      bussinessPartnerType,
      linkStores,
    });
    return res.status(200).json({ success: true, data: createdStore });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { createStore };
