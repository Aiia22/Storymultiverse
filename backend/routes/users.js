const express = require("express");
const router = express.Router();

// Import middleware
const { middleware } = require("../middlewares/authMiddleware");

// Import controller
const userController = require("../controllers/userController");

// Register a new user (Sign Up)
router.post("/register", userController.createUser);

// Login a user (I'm assuming you'll need this, even though it's not mentioned explicitly)
router.post("/login", userController.loginUser);

// Get a user's info (protected by middleware)
router.get("/:id", middleware, userController.getUserById);

// Update a user's info (protected by middleware)
router.put("/:id", middleware, userController.updateUser);

// Request password reset
router.post("/requestReset", userController.requestPasswordReset);

// Reset password using token
router.post("/resetPassword/:token", userController.resetPassword);

module.exports = router;
