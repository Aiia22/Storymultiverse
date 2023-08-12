const express = require("express");
const router = express.Router();

// ==>Import middleware
const middleware = require("../middlewares/authMiddleware");

// ==>Import controller
const userController = require("../controllers/userController");

// ==> Register
router.post("/register", userController.createUser);

// ==> Login
router.post("/login", userController.loginUser);

// ==> Get a user
router.get("/:id", middleware, userController.getUserById);

// ==>Update user info
router.put("/:id", middleware, userController.updateUser);

// Request password reset
router.post("/requestReset", userController.requestPasswordReset);

// ==> Reset password
router.post("/resetPassword/:token", userController.resetPassword);

module.exports = router;
