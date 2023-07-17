const User = require("../models/user");

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const result = await User.findByIdAndUpdate(userId, updatedUser);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.findByIdAndDelete(userId);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
