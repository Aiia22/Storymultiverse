const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

// ********** Import middlewares *********/
const {
  loginValidation,
  registerValidation,
} = require("../middlewares/validations");

// ********** Import model *********/
const User = require("../models/user"); // Import the User model

// ********** Secret *********/
const accessTokenSecret = "your-access-token-secret"; // fake secret, get a new accessToken!

// ===> Generate token
const generateAccessToken = (userId, name, membershipStatus) => {
  return jwt.sign({ userId, name, membershipStatus }, accessTokenSecret);
};

//**************  Register route *****************/

// ===> POST request : /api/register/
router.post("/register", async (req, res) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { name, userEmail, password } = req.body;

    // ==>  Check if user exists already in DB
    const emailExists = await User.findOne({ userEmail });
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // ====>  Hash passwords using bcrypt package
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ===> Create user
    const user = new User({ name, userEmail, password: hashedPassword });
    await user.save();

    res.status(200).json({ message: "User successfully registered" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//**************  Login route *****************/

// ===> POST request : /api/login/
router.post("/login", async (req, res) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { userEmail, password } = req.body;

    //====> find user by Email
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res.status(400).json({ error: "Email doesn't exist" });
    }

    // ===> Handle password comparison using bcrypt
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // ===> Create & attribute token
    const accessToken = generateAccessToken(
      user.userId,
      user.name,
      user.membershipStatus
    );
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
