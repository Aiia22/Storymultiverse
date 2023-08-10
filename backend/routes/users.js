const express = require("express");

// ********* Create router object ******/
const router = express.Router();

// ******** Import middleware *****/
const { middleware } = require("../middlewares/authMiddleware");

// ****** Import controller *********/
const userController = require("../controllers/userController");

//************ Users routes ****************/

// ===> GET all users: /api/users/
router.get("/", middleware, userController.getAllUsers);

// ==> GET user by ID: /api/users/:id
router.get("/:id", middleware, userController.getUserById);

// ===> POST create user: /api/users/
router.post("/", userController.createUser);

// ===> PUT update user by ID: /api/users/:id
router.put("/:id", middleware, userController.updateUser);

// ===> DELETE user by ID: /api/users/:id
router.delete("/:id", middleware, userController.deleteUser);

// ===> POST Request to request to reset password
router.post("/requestReset", userController.requestPasswordReset);

// ===> POST Request to reset password using token
router.post("/resetPassword/:token", userController.resetPassword);

module.exports = router;
