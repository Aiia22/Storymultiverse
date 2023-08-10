//************* Import express *********/
const express = require("express");
//************* Import cors module for handling cross-origin resource sharing *********/
const cors = require("cors");
//************* Import middleware *********/
const { middleware } = require("./middlewares/authMiddleware");
// *************** Create instance of express app ********/
const app = express();
// ************ Set port number ********/
const port = 3000;
// ********* Import the mongoose for MongoDB interaction *********/
const mongoose = require("mongoose");
// ******** MongoDB connection URI ************/
const mongoDB_Uri = "mongodb://localhost:27017/storymultiverse"; // ===> Replace with your MongoDB connection URI

//********* Connection mongoDB Database **************/
mongoose
  .connect(mongoDB_Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB sucessfully connected");
  })
  .catch((error) => {
    console.error("MongoDB couldn't be connected, see error log:", error);
  });

//********* Setup middlewares **************/
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

//********* Import routes **************/
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const searchRoute = require("./routes/search");

// ********* Set routes **********/
app.use("/api/users", middleware, usersRoute);
app.use("/api/auth", middleware, authRoute);
app.use("/api/search", searchRoute);

// ***** Start server ********/
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
