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

    // Process the registration logic using the User model
    const { username, email, password } = req.body;
    // *** Additional validation here ***
    // Create a new user using the User model
    const user = await User.create({ username, email, password });

    // Return a success response or any relevant data
    res.status(200).json({ message: "User uccessfully registered" });
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

    // Process the login logic using the User model
    const { email, password } = req.body;
    // Additional validation here
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and the password is correct
    if (!user || !user.comparePassword(password)) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

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
