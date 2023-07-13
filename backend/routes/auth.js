// import validations
const {
  loginValidation,
  registerValidation,
} = require("../middlewares/validations");

const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { middleware } = require("../middlewares/authMiddleware");

const accessTokenSecret = "your-access-token-secret"; // fake secret, get new accessToken!

const generateAccessToken = (userId, username, tier, membershipStatus) => {
  return jwt.sign(
    { userId, username, tier, membershipStatus },
    accessTokenSecret
  );
};

// Registration route
router.post("/register", async (req, res) => {
  try {
    // Validate the request body
    const { error } = registerValidation(req.body);

    if (error) {
      // Return a validation error response
      return res.status(400).json({ error: error.details[0].message });
    }

    // Process the registration logic
    // ...

    // Return a success response or any relevant data
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    // Validate the request body
    const { error } = loginValidation(req.body);

    if (error) {
      // Return a validation error response
      return res.status(400).json({ error: error.details[0].message });
    }

    // Process the login logic
    // ...

    // Generate an access token
    const accessToken = generateAccessToken(
      user.userId,
      user.username,
      user.tier,
      user.membershipStatus
    );

    // Return the access token or any relevant data
    res.status(200).json({ accessToken });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
