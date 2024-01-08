const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  businessName: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  newPassword: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
