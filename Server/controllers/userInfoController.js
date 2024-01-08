const UserInfo = require("../models/userInfoModel");
const UserModel = require("../models/userModel");

const createUserInfo = async (req, res) => {
  const {
    _id,
    name,
    lastName,
    email,
    phoneNumber,
    userName,
    businessName,
    country,
    address,
    postalCode,
    newPassword,
    confirmPassword,
  } = req.body;

  console.log(
    _id,
    name,
    lastName,
    email,
    phoneNumber,
    userName,
    businessName,
    country,
    address,
    postalCode,
    newPassword,
    confirmPassword
  );
  try {
    const doesUserExist = await UserModel.findOne({ _id });
    if (!doesUserExist) {
      throw Error("Sorry User doesn't exist");
    }
    const userInfo = await UserInfo.create({
      _id,
      name,
      lastName,
      email,
      phoneNumber,
      userName,
      country,
      businessName,
      address,
      postalCode,
      newPassword,
      confirmPassword,
    });
    return res.status(200).json({ success: true, data: userInfo });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { createUserInfo };
