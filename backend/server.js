//************* Import necessary modules *********/
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// *************** Create instance of express app ********/
const app = express();

// ************ Set port number ********/
const port = 5000;

// ******** MongoDB connection URI ************/
const mongoDB_Uri =
  "mongodb+srv://TatianaLeclerc:irJ0wKZw30IF8r9P@storymultiverse.zviyrpg.mongodb.net/StoryMultiVerse?retryWrites=true&w=majority";

//********* Connect to the mongoDB Database **************/
mongoose
  .connect(mongoDB_Uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB successfully connected");
  })
  .catch((error) => {
    console.error("MongoDB couldn't be connected, see error log:", error);
  });

//********* Setup middlewares **************/
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

//********* Import routes **************/
const usersRoute = require("./routes/users");
const searchRoute = require("./routes/search");

// ********* Set routes **********/
app.use("/api/users", usersRoute);
app.use("/api/search", searchRoute);

// ***** Start the server ********/
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
