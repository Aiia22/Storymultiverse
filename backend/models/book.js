const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  genre: String,
  bookPublishedDate: Date,
  description: String,
  readingLength: Number,
  bookSeries: Boolean,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  publishingCompanies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PublishingCompany",
  },
});

module.exports = mongoose.model("Book", bookSchema);
