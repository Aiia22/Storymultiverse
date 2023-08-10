const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  genre: String,
  releaseDate: Date,
  description: String,
  gameLength: Number,
  gameSeries: Boolean,
  gameCharacters: String, // or another schema if characters are more complex
  productionCompanies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductionCompany",
  },
});

module.exports = mongoose.model("Game", gameSchema);
