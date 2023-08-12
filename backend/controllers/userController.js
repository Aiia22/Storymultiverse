const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const accessTokenSecret = "storymultiverse-access-token-secret";

const generateAccessToken = (userId, username, tier, membershipStatus) => {
  return jwt.sign(
    { userId, username, tier, membershipStatus },
    accessTokenSecret
  );
};

// ==> Get user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ==> Create user
const createUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password should be at least 8 characters long" });
    }

    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ==>  Login
const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const user = await User.findOne({ userEmail });

    if (!user) {
      return res.status(401).json({ error: "These credentials are not valid" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "These credentials are not valid" });
    }

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

// ==>  Update
const updateUser = async (req, res) => {
  console.log(res);
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const result = await User.findByIdAndUpdate(userId, updatedUser);

    if (!result) {
      return res.status(404).json({ error: "The user was not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//==>  Delete
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.findByIdAndDelete(userId);

    if (!result) {
      return res.status(404).json({ error: "The user was not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ==> Reset password
const requestPasswordReset = async (req, res) => {
  res.status(501).json({ message: "Will be implmeented soon" });
};

const resetPassword = async (req, res) => {
  res.status(501).json({ message: "Will be implmeented soon" });
};

module.exports = {
  getUserById,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  requestPasswordReset,
  resetPassword,
};
