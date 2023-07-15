// Importing the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Setting the secret key used to sign and verify tokens
const accessTokenSecret = "storymultiverserules";

// Middleware function for JWT authentication
const authJWT = (req, res, next) => {
  // Retrieving the Authorization header from the request
  const authHeader = req.headers.authorization;

  // Checking if the Authorization header exists
  if (authHeader) {
    // Extracting the token from the "Bearer <token>" format
    const token = authHeader.split(" ")[1];

    // Verifying the token using the secret key
    jwt.verify(token, accessTokenSecret, (err, user) => {
      // If there's an error during verification
      if (err) {
        // Sending a "403 Forbidden" status code to the client
        return res.sendStatus(403);
      }

      // Attaching the user information extracted from the token to the request object
      req.user = user;

      // Proceeding to the next middleware or route handler
      next();
    });
  } else {
    // If the Authorization header is missing, sending a "401 Unauthorized" status code
    res.sendStatus(401);
  }
};

// Exporting the authJWT middleware function
exports.middleware = authJWT;
