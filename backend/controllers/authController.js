const User = require("../models/user");
const jwt = require("jsonwebtoken");

const accessTokenSecret = "your-access-token-secret"; // Replace with your actual access token secret

const generateAccessToken = (userId, username, tier, membershipStatus) => {
  return jwt.sign(
    { userId, username, tier, membershipStatus },
    accessTokenSecret
  );
};

// Register a new user
const registerUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);

    // Here can be place the logic of sending a  welcome email after registration

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(
      user._id,
      user.username,
      user.tier,
      user.membershipStatus
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
