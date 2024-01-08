const mongoose = require("mongoose"); // Erase if already required
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: [true, "Your username is not unique"],
    // },
    email: {
      type: String,
      required: true,
      unique: [true, "Your Email is already registered"],
    },
    // creator: {
    //   type: Object,
    // },
    // mobile: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },
    rememberMe: {
      type: Boolean,
      default: false,
    },
    // photo: {
    //   type: String,
    //   default:
    //     "https://th.bing.com/th/id/OIP.tmgWGdzGFmIwg1iaqCbSvgHaHa?w=179&h=194&c=7&r=0&o=5&pid=1.7",
    // },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.registerStatics = async function (
  // username,
  email,
  password
  // mobile
) {
  // console.log(username, email, password, mobile);

  // if (!username || !email || !password || !mobile) {
  //   throw Error("Please fill in all fields");
  // }

  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  // check whether Email is already registered
  const isAlreadyRegistered = await this.findOne({ email });
  if (isAlreadyRegistered) {
    throw Error("You already have registered. Please login to continue");
  }

  // check whether username is unique or not
  // const isUsernameUnique = await this.findOne({ username });
  // if (isUsernameUnique) {
  //   throw Error("You must have unique Username");
  // }

  // check whether mobile is unique or not
  // const isMobileUnique = await this.findOne({ mobile });
  // if (isMobileUnique) {
  //   throw Error("Your mobile number should be unique");
  // }

  // check whether email is valid or not
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  } // Check if the username contains only alphanumeric characters and underscores // if (!validator.isAlphanumeric(username, "en-US")) { //   throw new Error( //     "Username should contain only letters, numbers, or underscores" //   ); // } // Check if the username is at least 3 characters long

  // if (!validator.isLength(username, { min: 3 })) {
  //   throw new Error("Username should be at least 3 characters long");
  // } // Check if the mobile number is a valid phone number // if (!validator.isMobilePhone(mobile, "en-US")) { //   throw new Error("Invalid mobile number"); // }

  // check whether password is strong or not
  if (!validator.isStrongPassword(password)) {
    throw Error("Weak Password");
  }

  const salt = await bcrypt.genSalt(10); // generate salt
  const hash = await bcrypt.hash(password, salt); // generate hash

  // create the document in database
  const user = await this.create({
    // username,
    email,
    password: hash,
    // mobile,
  });
  return user;
};

userSchema.statics.loginStatics = async function (email, password) {
  // checks whether all credentials are given or not
  if (!email || !password) {
    throw new Error("Please enter all credentials");
  }

  // check whether email is valid or not
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  }

  // check whether user is previously registered or not
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("You haven't registered yet");
  }

  // checks whether password is correct or not
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Password doesn't match");
  }
  return user;
};

//Export the model
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
