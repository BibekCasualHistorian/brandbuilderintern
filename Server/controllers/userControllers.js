const UserModel = require("../models/userModel");

const register = async (req, res) => {
  const { username, email, password, mobile } = req.body;

  console.log("register", username, email, password, mobile);

  try {
    // One way
    // const user = new userModel({ username, email, password, mobile });
    // await user.save();

    // Another way to create a collection
    const user = await UserModel.registerStatics(
      username,
      email,
      password,
      mobile
    );
    const token = createJsonWebToken(user._id);

    // We don't want to send the password to user so
    const { password: hashedPassword, ...rest } = user._doc;

    // adding expiry date for token, we need to sign in every time we request for anything
    // api, so we use expires feautres to use that same token for certain time
    const expiryDate = new Date(Date.now() + 360000); // for 1 hour
    // return res.status(200).json(user);
    res
      .cookie("token", token, {
        // httpOnly: true, // client won't be accesss the sent cookie
        // when does it expires, it denotes that, alternate property is maxAge
        secure: false,
        expires:
          expiryDate /* there are other too like signed, secure, overwrite etc*/,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ status: "error", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password, rememberMe } = req.body;
  console.log("login", email, password, rememberMe);
  try {
    const user = await UserModel.loginStatics(email, password);
    console.log("user", user);
    const token = createJsonWebToken(user._id);
    const { password: hashedPassword, ...rest } = user._doc;
    return res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json(rest);
  } catch (error) {
    return res.status(400).json({ status: "error", error: error.message });
  }
};

module.exports = { login, register };
