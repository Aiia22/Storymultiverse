const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  membershipStatus: {
    type: String,
    enum: ["basic", "premium"],
    default: "basic",
  },
  age: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // You can add a minlength for additional security. Typically passwords should be longer than this.
  },
  phone: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    trim: true,
  },
  registered: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
