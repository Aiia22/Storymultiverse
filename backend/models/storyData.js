const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const productionCompanySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const filmSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storyName: String,
  name: String,
  genre: String,
  releaseDate: Date,
  description: String,
  filmLength: Number,
  directors: mongoose.Schema.Types.ObjectId,
  cast: String,
  productionCompanies: mongoose.Schema.Types.ObjectId,
});

const tvShowSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storyName: String,
  name: String,
  genre: String,
  releaseDate: Date,
  description: String,
  showLength: Number,
  directors: mongoose.Schema.Types.ObjectId,
  cast: String,
  productionCompanies: mongoose.Schema.Types.ObjectId,
});

const authorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const publishingCompanySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storyName: String,
  name: String,
  genre: String,
  bookPublishedDate: Date,
  description: String,
  readingLength: Number,
  bookSeries: Boolean,
  author: mongoose.Schema.Types.ObjectId,
  publishingCompanies: mongoose.Schema.Types.ObjectId,
});

const gameSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  storyName: String,
  name: String,
  genre: String,
  releaseDate: Date,
  description: String,
  gameLength: Number,
  gameSeries: Boolean,
  gameCharacters: String,
  productionCompanies: mongoose.Schema.Types.ObjectId,
});

// ******* Embed them in storyDataSchema ***********/

const storyDataSchema = new mongoose.Schema({
  directors: [directorSchema],
  productionCompanies: [productionCompanySchema],
  films: [filmSchema],
  tvShows: [tvShowSchema],
  authors: [authorSchema],
  publishingCompanies: [publishingCompanySchema],
  books: [bookSchema],
  games: [gameSchema],
});

module.exports = mongoose.model("StoryData", storyDataSchema, "stories");
