const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

module.exports = mongoose.model("Author", authorSchema);
