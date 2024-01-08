const jwt = require("jsonwebtoken");

function createJsonWebToken(user) {
  // Create the JWT with specified payload and secret
  const token = jwt.sign({ user }, "really mean", { expiresIn: "3d" });

  return token;
}

module.exports = createJsonWebToken;
