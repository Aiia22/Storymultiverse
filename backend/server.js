const express = require("express");
const cors = require("cors");
const { middleware } = require("./middlewares/authMiddleware");
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

app.use("/users", middleware, usersRouter);
app.use("/auth", middleware, authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
