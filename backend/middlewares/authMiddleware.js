const jwt = require("jsonwebtoken");
const accessTokenSecret = "storymultiverserules";

// ********** Authenticate using JWT ****************/
const authJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ===> Check if Authorization header exist
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

exports.middleware = authJWT;
