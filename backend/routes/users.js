const express = require("express");
const router = express.Router();
const { middleware } = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");

// Define routes for users
router.get("/", middleware, userController.getAllUsers);
router.get("/:id", middleware, userController.getUserById);
router.post("/", middleware, userController.createUser);
router.put("/:id", middleware, userController.updateUser);
router.delete("/:id", middleware, userController.deleteUser);

module.exports = router;
