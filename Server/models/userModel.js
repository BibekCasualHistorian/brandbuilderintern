const mongoose = require("mongoose"); // Erase if already required
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "Your username is not unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Your Email is already registered"],
    },
    creator: {
      type: Object,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.tmgWGdzGFmIwg1iaqCbSvgHaHa?w=179&h=194&c=7&r=0&o=5&pid=1.7",
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
