const User = require("../models/user");

// Get all users
const getAllUsers = (req, res) => {
  // Implement the logic to fetch all users from the database
  // Example:
  const users = User.getAllUsers();

  res.json(users);
};

// Get a user by ID
const getUserById = (req, res) => {
  // Implement the logic to fetch a user by ID from the database
  // Example:
  const userId = req.params.id;
  const user = User.getUserById(userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(user);
};

// Create a new user
const createUser = (req, res) => {
  // Implement the logic to create a new user in the database
  // Example:
  const newUser = req.body;
  const createdUser = User.createUser(newUser);

  res.status(201).json(createdUser);
};

// Update a user
const updateUser = (req, res) => {
  // Implement the logic to update a user in the database
  // Example:
  const userId = req.params.id;
  const updatedUser = req.body;

  const result = User.updateUser(userId, updatedUser);

  if (!result) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json(result);
};

// Delete a user
const deleteUser = (req, res) => {
  // Implement the logic to delete a user from the database
  // Example:
  const userId = req.params.id;
  const result = User.deleteUser(userId);

  if (!result) {
    return res.status(404).json({ error: "User not found" });
  }

  res.json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
