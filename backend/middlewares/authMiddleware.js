const jwt = require("jsonwebtoken");

const accessTokenSecret = "storymultiverse-access-token-secret";

const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const user = jwt.verify(token, accessTokenSecret);
      req.user = user;
      next();
    } catch (err) {
      return res.status(403).json({ error: "Token is not valid" });
    }
  } else {
    return res.status(401).json({ error: "Authorization token is missing" });
  }
};

module.exports = authJWT;
