const express = require("express");

const Router = express.Router();

Router.post("/register");

Router.post("/login");

Router.post("/social-register", socialRegister);

Router.post("/social-login", socialLogin);

Router.patch("/update-password/:id", updatePassword);

Router.delete("/delete-account/:id", requireAuth, deleteAccount);

Router.get("/logout", logout);

Router.route("/authenticate").post(controller.verifyUser, (req, res) =>
  res.end()
);

module.exports = { userRouter: Router };
