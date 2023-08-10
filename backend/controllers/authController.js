const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const accessTokenSecret = "your-access-token-secret"; // Replace with your actual access token secret

const generateAccessToken = (userId, username, tier, membershipStatus) => {
  return jwt.sign(
    { userId, username, tier, membershipStatus },
    accessTokenSecret
  );
};

// ===>  Register new user
const registerUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);

    // Here ====> logic of sending a  welcome email after registration

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ===> Login user
const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    const user = await User.findOne({ userEmail });

    // ===> Check if user exist & compare hashed passwords
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // ===> generate access token
    const accessToken = generateAccessToken(
      user._id,
      user.name,
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
