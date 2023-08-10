const User = require("../models/user");

// ******* Import bcrypt *******/
const bcrypt = require("bcrypt");

const saltRounds = 10; // ===> use for hashing.

// ==> Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ===> Get user by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ==> Create new user
const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    // ===> Hash  password
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    newUser.password = hashedPassword;

    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ===> Update user
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;

    const result = await User.findByIdAndUpdate(userId, updatedUser);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ==> Delete user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.findByIdAndDelete(userId);

    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ===> User requests for  password reset
const requestPasswordReset = async (req, res) => {
  try {
    const user = await User.findOne({ userEmail: req.body.email });
    if (!user) {
      return res.status(404).json({ error: "No user found with that email" });
    }

    // ===> Generate token & set expiry
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // ===> will expiry in 1 hour

    await user.save();

    // ====> Send email with with token
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "YOUR_EMAIL_ADDRESS",
        pass: "YOUR_EMAIL_PASSWORD",
      },
    });

    const mailOptions = {
      to: user.userEmail,
      from: "passwordreset@example.com",
      subject: "Password Reset",
      text: `Hi ther , You are receiving this email because you have requested the reset of the password for your account.\n\nPlease click on the following link to complete the process:\n\nhttp://${req.headers.host}/resetPassword/${resetToken}\n\nIf you did not request this, please signal it as soon as possible to our support team.\n`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(500).json({ error: "Email could not be sent." });
      }
      res.status(200).json({ message: "Password reset email sent." });
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ===> User resets password using token
const resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Reset token is invalid or has expired." });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password successfully reset." });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  requestPasswordReset,
  resetPassword,
};
