const express = require("express");
const { login, register } = require("../controllers/userControllers");
const { createUserInfo } = require("../controllers/userInfoController");
const { createStore } = require("../controllers/storeController");
const {
  createProductCategory,
} = require("../controllers/productCategoryController");

const Router = express.Router();

Router.post("/register", register);

Router.post("/login", login);

Router.post("/userInfo", createUserInfo);

Router.post("/createStore", createStore);

Router.post("/createproductcategory", createProductCategory);

// Router.post("/social-register", socialRegister);

// Router.post("/social-login", socialLogin);

// Router.patch("/update-password/:id", updatePassword);

// Router.delete("/delete-account/:id", requireAuth, deleteAccount);

// Router.get("/logout", logout);

// Router.route("/authenticate").post(controller.verifyUser, (req, res) =>
//   res.end()
// );

module.exports = { userRouter: Router };
