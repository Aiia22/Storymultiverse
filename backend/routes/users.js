// Importing the express module
const express = require("express");

// Creating a router object
const router = express.Router();

// Importing the authMiddleware module
const { middleware } = require("../middlewares/authMiddleware");

// Importing the userController module
const userController = require("../controllers/userController");

// Define routes for users
// GET request to retrieve all users
router.get("/", middleware, userController.getAllUsers);

// GET request to retrieve a user by ID
router.get("/:id", middleware, userController.getUserById);

// POST request to create a new user
router.post("/", middleware, userController.createUser);

// PUT request to update a user by ID
router.put("/:id", middleware, userController.updateUser);

// DELETE request to delete a user by ID
router.delete("/:id", middleware, userController.deleteUser);

// Exporting the router
module.exports = router;
