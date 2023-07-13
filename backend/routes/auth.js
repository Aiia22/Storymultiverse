const jwt = require("jsonwebtoken");

const accessTokenSecret = "your-access-token-secret";

const generateAccessToken = (userId, username, tier, level) => {
  return jwt.sign({ userId, username, tier, level }, accessTokenSecret);
};

module.exports = {
  generateAccessToken,
};
