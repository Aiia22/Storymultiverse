// Importing the express module
const express = require("express");

// Importing the cors module for handling cross-origin resource sharing
const cors = require("cors");

// Importing the authMiddleware module
const { middleware } = require("./middlewares/authMiddleware");

// Creating an instance of the express application
const app = express();

// Setting the port number for the server
const port = 3000;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Importing route modules
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

// Setting up routes
app.use("/users", middleware, usersRouter); // Mounting the usersRouter with "/users" path
app.use("/auth", middleware, authRouter); // Mounting the authRouter with "/auth" path

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
